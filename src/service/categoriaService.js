import db from '../db/db.js'
import ErrorHendler from '../functions/errorHendler.js'
import { PreparedStatement } from 'pg-promise'
import { INSERT_CATEGORIA, SELECT_CATEGORIA } from '../db/queries.js'


export async function cadastrarCategoria(descricao, usuario) {
  try {
      const query = PreparedStatement('cadastrar-categoria', INSERT_CATEGORIA, [usuario, descricao.descricao])
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao cadastrar Conta', error)
  }
}

export async function getCategorias(usuario) {
  try {
      const query = PreparedStatement('buscar-categoria', SELECT_CATEGORIA, [usuario])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao cadastrar Conta', error)
  }
}