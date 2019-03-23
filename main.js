import http from 'http'
import server from './src/server/server.js'

global.Promise = require('bluebird')

const httpServer = http.createServer(server)
httpServer.listen(3000, () => {
	console.log(`Server is running on PORT: 3000`)
})
