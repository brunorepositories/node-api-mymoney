import status from 'http-status'
import emailValidator from 'email-validator'
import { buscarEmail, cadastrarUsuario } from '../service/usuarioService.js'


async function verificaEmail(login) {
  if ( emailValidator.validate(login) ) {
    const encontrou = await buscarEmail(login)
    return encontrou === null ? true : false
  }
}


export async function criarUsuario(req, res, next) {
  const { ...usuario } = req.body.usuario
  try {
    if ( await verificaEmail(usuario.login) ){
      const novoUsuario = await cadastrarUsuario(usuario)
      return res.status(status.OK).json(novoUsuario)
    } else {
       return res.status(status.OK).json('Usuário já cadastrado')
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}
