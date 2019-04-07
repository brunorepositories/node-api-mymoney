import db from '../db/db.js'
import ErrorHendler from '../functions/errorHendler.js'
import { PreparedStatement } from 'pg-promise'
import { INSERT_CATEGORIA } from '../db/queries.js'


export async function cadastrarCategoria(descricao, usuario) {
  try {
      const query = PreparedStatement('cadastrar-categoria', INSERT_CATEGORIA, [usuario, descricao.descricao])
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao cadastrar Conta', error)
  }
}