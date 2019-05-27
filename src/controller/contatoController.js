import status from 'http-status'
// import emailValidator from 'email-validator'
import { cadastrarContato, getAllContatos, deleteContato, verificarVinculoContato, getContato, alterContato } from '../service/contaService.js'
// import { encryption, crypt, decrypt } from '../functions/encryption'

export async function criarContato(req, res, next) {
   const { ...contato } = req.body
   const idUsuario = req.headers.usuario
   try {
      const novoContato = await cadastrarContato(contato, idUsuario)
      return res.status(status.OK).json(novoContato)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function alterarContato(req, res, next) {
   const { ...contato } = req.body
   try {
      await alterContato(contato)
      return res.status(status.OK).json('Contato alterada!')
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function buscarTodosContatos(req, res, next) {
   const idUsuario = req.params.idUsuario
   try {
      const conta = await getAllContatos(idUsuario)
      return res.status(status.OK).json(conta)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function buscarContato(req, res, next) {
   const idContato = req.params.idContato
   try {
      const contato = await getContato(idContato)
      return res.status(status.OK).json(contato)
   } catch (error) {
      console.log(error)
      next(error)
  }
}

export async function deletarContato(req, res, next) {
   const idContato = req.params.idContato
   try {
      const acept = await verificarVinculoContato(idContato)
      if (acept) {
         return res.status(status.NON_AUTHORITATIVE_INFORMATION).json('Contato possui algum vinculo!')
      } else {
         await deleteContato(idContato)
         return res.status(status.OK).json('Contato deletada!')
      }
   } catch (error) {
      console.log(error)
      next(error)
  }
}