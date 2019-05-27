import status from 'http-status'
// import emailValidator from 'email-validator'
import { cadastrarCategoria, getAllCategorias, getCategoria, alterCategoria, verificarVinculoCategoria, deleteCategoria } from '../service/categoriaService.js'
// import { encryption, crypt, decrypt } from '../functions/encryption'

export async function criarCategoria(req, res, next) {
   const descricao = req.body
   const usuario = req.headers.usuario
   try {
      const novaCategoria = await cadastrarCategoria(descricao, usuario)
      return res.status(status.OK).json(novaCategoria)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function alterarCategoria(req, res, next) {
   const { ...categoria } = req.body
   try {
      await alterCategoria(categoria)
      return res.status(status.OK).json('Categoria alterada!')
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function buscarTodasCategorias(req, res, next) {
   const usuario = req.headers.usuario
   try {
      const categorias = await getAllCategorias(usuario)
      return res.status(status.OK).json(categorias)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function buscarCategoria(req, res, next) {
   const idCategoria = req.params.idCategoria
   try {
      const categoria = await getCategoria(idCategoria)
      return res.status(status.OK).json(categoria)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function deletarCategoria(req, res, next) {
   const idCategoria = req.params.idCategoria
   try {
      const acept = await verificarVinculoCategoria(idCategoria)
      if (acept) {
         return res.status(status.NON_AUTHORITATIVE_INFORMATION).json('Categoria possui algum vinculo!')
      } else {
         await deleteCategoria(idCategoria)
         return res.status(status.OK).json('Categoria deletada!')
      }
   } catch (error) {
      console.log(error)
      next(error)
  }
}