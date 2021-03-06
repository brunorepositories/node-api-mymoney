import db from '../db/db.js'
import ErrorHendler from '../functions/errorHendler.js'
import { PreparedStatement } from 'pg-promise'
import { INSERT_CONTA } from '../db/queries.js'


export async function cadastrarConta(conta, usuario) {
  try {
      const query = PreparedStatement('cadastrar-conta', INSERT_CONTA, [usuario, conta.descricao, conta.tipo, conta.saldo])
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao cadastrar Conta', error)
  }
}