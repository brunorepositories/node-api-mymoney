import httpStatus from 'http-status'

class ErrorHandler extends Error {
	constructor (mensagem, error = {}, status = httpStatus.INTERNAL_SERVER_ERROR) {
		super(mensagem)
		this.mensagem = mensagem
    this.error = error
		this.status = status
    console.log('mensagem -----> ', mensagem, 'color:green')
    console.log('error --------> ', error, 'color:green')
	}
}

export default ErrorHandler