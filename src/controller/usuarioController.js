import status from 'http-status'
import emailValidator from 'email-validator'
import { buscarEmail, cadastrarUsuario } from '../service/usuarioService.js'
import { encryption, crypt, decrypt } from '../functions/encryption'

async function verificaEmail(login) {
  if ( emailValidator.validate(login) ) {
    const encontrou = await buscarEmail(login)
    return encontrou
  } else {
    return false
  }
}

export async function criarUsuario(req, res, next) {
  const { ...usuario } = req.body.usuario
  usuario.login = usuario.login.toLowerCase().trim()
  try {
    const email = await verificaEmail(usuario.login)
    if ( email === null  ){
      const novoUsuario = await cadastrarUsuario(usuario)
      return res.status(status.OK).json(novoUsuario)
    } else if ( !email ) {
      return res.status(status.OK).json('E-mail inválido')
    } else {
      return res.status(status.OK).json('E-mail Já cadastrado')
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}
