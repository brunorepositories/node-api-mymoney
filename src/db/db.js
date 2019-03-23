import Promise from 'bluebird'
require('dotenv').config()

const initOptions = {
	promiseLib: Promise,
  schema: [process.env.DB_SCHEMA],
	connect (client, dc, isFresh) {
		const cp = client.connectionParameters
		console.log('Conectado na base de dados:', cp.database)
	},
	error (err, e) {
		if (err) {
			console.log(err)
		}
	},
	query (e) {
		console.log('QUERY:', e.query)
	}
}

const connectionConfig = {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	poolSize: 10,
	idleTimeoutMillis: 50
}

const pgp = require('pg-promise')(initOptions)
const db = pgp(connectionConfig)

export default db