import status from 'http-status'
// import emailValidator from 'email-validator'
import { cadastrarCategoria, getCategorias } from '../service/categoriaService.js'
// import { encryption, crypt, decrypt } from '../functions/encryption'

export async function criarCategoria(req, res, next) {
   const descricao = req.body
   const usuario = req.headers.usuario
   try {
      const novaConta = await cadastrarCategoria(descricao, usuario)
      return res.status(status.OK).json(novaConta)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function buscarCategorias(req, res, next) {
   const id = req.params.id
   try {
      const categorias = await getCategorias(id)
      return res.status(status.OK).json(categorias)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

