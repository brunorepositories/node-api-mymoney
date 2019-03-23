import db from '../db/db.js'
import status from 'http-status'
import { PreparedStatement } from 'pg-promise'
import { SELECT_TESTE } from '../db/queries.js'


export async function teste(req, res) {
  const query = new PreparedStatement('funcao-abc', SELECT_TESTE)
  let result = await db.oneOrNone(query)
  return res.status(status.OK).json(result)
}
