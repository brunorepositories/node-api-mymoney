import db from '../db/db.js'
import status from 'http-status'
import ErrorHendler from '../functions/errorHendler.js'
import { PreparedStatement } from 'pg-promise'
import { SELECT_USER, INSERT_USUARIO } from '../db/queries.js'


export async function buscarEmail(login) {
  try {
    const query = PreparedStatement('busca-usuario', SELECT_USER, [login])
    const result = await db.oneOrNone(query)
    return result
  } catch (error) {
    return new ErrorHendler('buscarEmail - Erro ao buscar login do usuario', error)
  }
}


export async function cadastrarUsuario(usuario) {
  try {
    const query = PreparedStatement('cadastrar-usuario', INSERT_USUARIO, [usuario.nome, usuario.login, usuario.senha, true])
    const result = await db.oneOrNone(query)
    return result
  } catch (error) {
    return new ErrorHendler('Erro ao buscar login do usuario - buscarEmail', error)
  }
}