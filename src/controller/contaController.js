import status from 'http-status'
// import emailValidator from 'email-validator'
import { cadastrarConta, getContas } from '../service/contaService.js'
// import { encryption, crypt, decrypt } from '../functions/encryption'

export async function criarConta(req, res, next) {
   const { ...conta } = req.body
   const usuario = req.headers.usuario
   try {
      const novaConta = await cadastrarConta(conta, usuario)
      return res.status(status.OK).json(novaConta)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function buscarContas(req, res, next) {
   const id = req.params.id
   try {
      const categorias = await getContas(id)
      return res.status(status.OK).json(categorias)
   } catch (error) {
      console.log(error)
      next(error)
  }
}
