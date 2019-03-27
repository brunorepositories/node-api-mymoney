CREATE TYPE tipo_pessoa AS ENUM ('PF', 'PJ');
CREATE TYPE tipo_lancamento AS ENUM ('R', 'D');


create table usuario(
  id serial primary key,
  login varchar(50) unique not null,
  senha varchar(15) not null,
  nome varchar(50) not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp
);

create table conta(
  id serial primary key,
  usuario integer references usuario(id) not null,
  descricao varchar(50) not null,
  saldo numeric not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp
);

create table pf_pj(
  id serial primary key,
  usuario integer references usuario(id) not null,
  nome varchar(50) not null,
  documento integer,
  tipo tipo_pessoa not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp
);

create table categoria(
  id serial primary key,
  usuario integer references usuario(id) not null,
  descricao varchar(50) not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp
);

create table sub_categoria(
  id serial primary key,
  categoria integer references categoria(id) not null,
  descricao varchar(50) not null,
  ativo boolean not null,
  dt_criacao timestamp not null default current_timestamp,
  dt_atualizacao timestamp not null default current_timestamp
);

create table transferencia(
  id serial primary key,
  usuario integer references usuario(id) not null,
  conta_origem integer references conta(id) not null,
  conta_destino integer references conta(id) not null,
  valor numeric not null,
  dt_transferencia timestamp not null default current_timestamp
);

create table lancamento(
  id serial primary key,
  usuario integer references usuario(id) not null,
  categoria integer references categoria(id) not null,
  conta integer references conta(id) not null,
  pf_pj integer references pf_pj(id),
  referencia integer references lancamento(id),
  fixo boolean not null,
  pago boolean not null,
  valor numeric,
  dt_lancamento timestamp not null default current_timestamp,
  numero_parcela integer not null,
  tipo tipo_lancamento not null,
  descricao varchar(50) not null,
  ativo boolean,
  dt_atualizacao timestamp not null default current_timestamp
);