import status from 'http-status'
// import emailValidator from 'email-validator'
import { cadastrarConta, getAllContas, deleteConta, verificarVinculoConta, getConta, alterConta } from '../service/contaService.js'
// import { encryption, crypt, decrypt } from '../functions/encryption'

export async function criarConta(req, res, next) {
   const { ...conta } = req.body
   const idUsuario = req.headers.usuario
   try {
      const novaConta = await cadastrarConta(conta, idUsuario)
      return res.status(status.OK).json(novaConta)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function alterarConta(req, res, next) {
   const { ...conta } = req.body
   try {
      await alterConta(conta)
      return res.status(status.OK).json('Conta alterada!')
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function buscarTodasContas(req, res, next) {
   const idUsuario = req.params.idUsuario
   try {
      const contas = await getAllContas(idUsuario)
      return res.status(status.OK).json(contas)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function buscarConta(req, res, next) {
   const idConta = req.params.idConta
   try {
      const conta = await getConta(idConta)
      return res.status(status.OK).json(conta)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function deletarConta(req, res, next) {
   const idConta = req.params.idConta
   try {
      const acept = await verificarVinculoConta(idConta)
      if (acept) {
         return res.status(status.NON_AUTHORITATIVE_INFORMATION).json('Conta possui algum vinculo!')
      } else {
         await deleteConta(idConta)
         return res.status(status.OK).json('Conta deletada!')
      }
   } catch (error) {
      console.log(error)
      next(error)
  }
}