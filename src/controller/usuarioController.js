import db from '../db/db.js'
import { PreparedStatement } from 'pg-promise'
import { SELECT_TESTE } from '../db/queries.js'

export async function teste(req, res) {
  const query = new PreparedStatement('funcao-abc', SELECT_TESTE)
  let result = await db.oneOrNone(query)
  return res.json(result)
}


// export function teste(req, res) {
//   const users = [
//     {name: 'Jones', email: 'jones@gmail.com'},
//     {name: 'Henrique', email: 'henrique@hotmail.com'}
//   ]
//   return res.json(users)
// }