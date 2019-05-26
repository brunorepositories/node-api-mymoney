import db from '../db/db.js'
import ErrorHendler from '../functions/errorHendler.js'
import { PreparedStatement } from 'pg-promise'
import { INSERT_CONTA, SELECT_ALL_CONTAS, VERIFICA_VINCULO_CONTA, DELETE_CONTA, SELECT_CONTA, ALTER_CONTA } from '../db/queries.js'


export async function cadastrarConta(conta, usuario) {
  try {
      const query = PreparedStatement('cadastrar-conta', INSERT_CONTA, [usuario, conta.descricao, conta.tipo, conta.saldo])
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao cadastrar Conta', error)
  }
}

export async function alterConta(conta) {
  try {
      const query = PreparedStatement('alterar-conta', ALTER_CONTA, [conta.conta, conta.descricao, conta.tipo, conta.saldo])
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao alterar Conta', error)
  }
}

export async function getAllContas(idUsuario) {
  try {
      const query = PreparedStatement('buscar-todas-contas', SELECT_ALL_CONTAS, [idUsuario])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao buscar Contas', error)
  }
}

export async function getConta(idConta) {
  try {
      const query = PreparedStatement('buscar-conta', SELECT_CONTA, [idConta])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao buscar Contas', error)
  }
}

export async function deleteConta(idConta) {
  try {
      const query = PreparedStatement('deletar-conta', DELETE_CONTA, [idConta])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao deletar Conta', error)
  }
}

export async function verificarVinculoConta(idConta) {
  try {
      const query = PreparedStatement('verificar-vinculo-conta', VERIFICA_VINCULO_CONTA, [idConta])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao deletar Conta', error)
  }
}