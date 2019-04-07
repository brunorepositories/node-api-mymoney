// Usuário
export const INSERT_USUARIO = 'insert into usuario (nome, login, senha, ativo) values ($1, $2, $3, true) returning * ;'
export const SELECT_USER = 'select * from usuario where login = $1 ;'

// Conta
export const INSERT_CONTA = 'INSERT INTO conta (usuario, descricao, tipo_conta, saldo, ativo) VALUES($1, $2, $3, $4, true) returning * ;'

// Categoria
export const INSERT_CATEGORIA = 'INSERT INTO categoria (usuario, descricao, ativo) VALUES($1, $2, true) returning * ;'
export const SELECT_CATEGORIA = 'select array_to_json(array_agg(row_to_json(a))) from ( select id, descricao from categoria where usuario = $1 and ativo = true) a;'
