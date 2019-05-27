// import emailValidator from 'email-validator'
// import { encryption, crypt, decrypt } from '../functions/encryption'
import status from 'http-status'
import { cadastrarSubCategoria,
         getAllSubCategorias,
         getSubCategoria,
         alterSubCategoria,
         verificarVinculoSubCategoria,
         deleteSubCategoria } from '../service/subCategoriaService.js'


export async function criarSubCategoria(req, res, next) {
   const { ...subCategoria } = req.body
   try {
      const novaSubCategoria = await cadastrarSubCategoria(subCategoria)
      return res.status(status.OK).json(novaSubCategoria)
   } catch (error) {
      console.log(error)
      return res.status(500)
  }
}

export async function alterarSubCategoria(req, res, next) {
   const { ...subCategoria } = req.body
   try {
      await alterSubCategoria(subCategoria)
      return res.status(status.OK).json('SubCategoria alterada!')
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function buscarTodasSubCategorias(req, res, next) {
   const usuario = req.headers.usuario
   try {
      const subCategorias = await getAllSubCategorias(usuario)
      return res.status(status.OK).json(subCategorias)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function buscarSubCategoria(req, res, next) {
   const idSubCategoria = req.params.idSubCategoria
   try {
      const subCategoria = await getSubCategoria(idSubCategoria)
      return res.status(status.OK).json(subCategoria)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function deletarSubCategoria(req, res, next) {
   const idSubCategoria = req.params.idSubCategoria
   try {
      const acept = await verificarVinculoSubCategoria(idSubCategoria)
      if (acept) {
         return res.status(status.NON_AUTHORITATIVE_INFORMATION).json('SubCategoria possui algum vinculo!')
      } else {
         await deleteSubCategoria(idSubCategoria)
         return res.status(status.OK).json('SubCategoria deletada!')
      }
   } catch (error) {
      console.log(error)
      next(error)
  }
}