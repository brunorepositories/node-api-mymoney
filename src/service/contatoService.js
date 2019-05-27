import db from '../db/db.js'
import ErrorHendler from '../functions/errorHendler.js'
import { PreparedStatement } from 'pg-promise'
import { INSERT_CONTATO, SELECT_ALL_CONTATOS, VERIFICA_VINCULO_CONTATO, DELETE_CONTATO, SELECT_CONTATO, ALTER_CONTATO } from '../db/queries.js'


export async function cadastrarContato(contato, usuario) {
  try {
      const query = PreparedStatement('cadastrar-contato', INSERT_CONTATO, [usuario, contato.descricao, contato.tipo, contato.saldo])
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao cadastrar Contato', error)
  }
}

export async function alterContato(contato) {
  try {
      const query = PreparedStatement('alterar-contato', ALTER_CONTATO, [contato.contato, contato.descricao, contato.tipo, contato.saldo])
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao alterar Contato', error)
  }
}

export async function getAllContatos(idUsuario) {
  try {
      const query = PreparedStatement('buscar-todas-contatos', SELECT_ALL_CONTATOS, [idUsuario])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao buscar Contatos', error)
  }
}

export async function getContato(idContato) {
  try {
      const query = PreparedStatement('buscar-contato', SELECT_CONTATO, [idContato])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao buscar Contatos', error)
  }
}

export async function deleteContato(idContato) {
  try {
      const query = PreparedStatement('deletar-contato', DELETE_CONTATO, [idContato])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao deletar Contato', error)
  }
}

export async function verificarVinculoContato(idContato) {
  try {
      const query = PreparedStatement('verificar-vinculo-contato', VERIFICA_VINCULO_CONTATO, [idContato])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao deletar Contato', error)
  }
}