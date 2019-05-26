// Usuário
export const INSERT_USUARIO = `insert into usuario (nome, login, senha, ativo) values ($1, $2, $3, true) returning * ;`
export const SELECT_USER = `select * from usuario where login = $1 ;`

// Conta
export const INSERT_CONTA = `insert into conta (usuario, descricao, tipo_conta, saldo, ativo) VALUES($1, $2, $3, $4, true) returning * ;`
export const SELECT_ALL_CONTAS = `select array_to_json(array_agg(row_to_json(a))) dados
                                 from ( select id, descricao, tipo_conta, saldo from conta where usuario = $1 and ativo = true order by dt_criacao asc) a;`
export const DELETE_CONTA = `delete from conta where id = $1;`
export const VERIFICA_VINCULO_CONTA = `select true from lancamento lan
                                       left join transferencia tra on tra.usuario = lan.usuario and lan.conta = tra.conta_destino and lan.conta = tra.conta_origem
                                       where lan.conta = $1;`
export const SELECT_CONTA = `select * from conta where id = $1;`
export const ALTER_CONTA = `UPDATE conta SET descricao = $2, tipo_conta = $3, saldo = $4, dt_atualizacao = CURRENT_TIMESTAMP WHERE id = $1;`

// Categoria
export const INSERT_CATEGORIA = `insert into categoria (usuario, descricao, ativo) VALUES($1, $2, true) returning * ;`
export const SELECT_ALL_CATEGORIA = `select array_to_json(array_agg(t)) dados
                                 from (select *,
                                          (select array_to_json(array_agg(row_to_json(b)))
                                             from ( select * from sub_categoria s where c.id = s.categoria and ativo = true) b
                                          ) subCategorias
                                       from categoria c where usuario = $1 and ativo = true
                                       order by dt_criacao asc
                                 ) t;`
export const SELECT_CATEGORIA = `select * from categoria where id = $1;`
export const ALTER_CATEGORIA = `UPDATE categoria SET descricao = $2, dt_atualizacao = CURRENT_TIMESTAMP WHERE id = $1;`
export const VERIFICA_VINCULO_CATEGORIA = `select distinct true from sub_categoria s
                                          left join lancamento lan on lan.sub_categoria = s.id
                                          where s.categoria = $1;`
export const DELETE_CATEGORIA = `delete from categoria where id = $1;`