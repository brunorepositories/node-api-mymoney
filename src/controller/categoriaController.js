import status from 'http-status'
// import emailValidator from 'email-validator'
import { cadastrarCategoria } from '../service/categoriaService.js'
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
