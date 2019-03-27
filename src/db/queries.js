export const INSERT_USUARIO = 'insert into usuario (nome, login, senha, ativo) values ($1, $2, $3, true) returning *;'

export const SELECT_USER = 'select * from usuario where login = $1;'