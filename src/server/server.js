import cors from'cors'
import helmet from'helmet'
import morgan from'morgan'
import express from'express'
import bodyParser from'body-parser'
import router from '../router/router.js'

require('dotenv').config()

const server = express()

if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
	server.use(morgan('combined'))
}

server.use(cors())
server.use(helmet())
server.use(helmet.noCache())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use((error, req, res, next) => {
	res.status(error.status).json(error)
})

server.use('/api/', router)

export default server