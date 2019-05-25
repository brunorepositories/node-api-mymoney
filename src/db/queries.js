// Usuário
export const INSERT_USUARIO = `insert into usuario (nome, login, senha, ativo) values ($1, $2, $3, true) returning * ;`
export const SELECT_USER = `select * from usuario where login = $1 ;`

// Conta
export const INSERT_CONTA = `insert into conta (usuario, descricao, tipo_conta, saldo, ativo) VALUES($1, $2, $3, $4, true) returning * ;`
export const SELECT_ALL_CONTAS = `select array_to_json(array_agg(row_to_json(a))) dados
                              from ( select id, descricao, tipo_conta, saldo from conta where usuario = $1 and ativo = true order by dt_criacao desc) a;`
export const DELETE_CONTA = `delete from conta where usuario = $1 and id = $2;`
export const VERIFICA_VINCULO_CONTA = `select true from usuario usu
                                       left join lancamento lan on lan.usuario = usu.id
                                       left join transferencia tra on tra.usuario = usu.id
                                       where usu.id = $1 and lan.conta = $2 and  tra.conta_origem is not null
                                       and tra.conta_destino is not null and lan.ativo is true;`
export const SELECT_CONTA = `select * from conta where id = $1;`
export const ALTER_CONTA = `UPDATE conta SET descricao = $2, tipo_conta = $3, saldo = $4, dt_atualizacao = CURRENT_TIMESTAMP WHERE id = $1;`

// Categoria
export const INSERT_CATEGORIA = `insert into categoria (usuario, descricao, ativo) VALUES($1, $2, true) returning * ;`
export const SELECT_CATEGORIA = `select array_to_json(array_agg(row_to_json(a))) dados from ( select id, descricao from categoria where usuario = $1 and ativo = true) a;`
