import db from '../db/db.js'
import ErrorHendler from '../functions/errorHendler.js'
import { PreparedStatement } from 'pg-promise'
import { INSERT_CATEGORIA, SELECT_ALL_CATEGORIA, SELECT_CATEGORIA, ALTER_CATEGORIA, VERIFICA_VINCULO_CATEGORIA, DELETE_CATEGORIA } from '../db/queries.js'


export async function cadastrarCategoria(descricao, usuario) {
  try {
      const query = PreparedStatement('cadastrar-categoria', INSERT_CATEGORIA, [usuario, descricao.descricao])
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao cadastrar Categoria', error)
  }
}

export async function alterCategoria(categoria) {
  try {
      const query = PreparedStatement('alterar-categoria', ALTER_CATEGORIA, [categoria.categoria, categoria.descricao])
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao alterar Categoria', error)
  }
}

export async function getAllCategorias(idUsuario) {
  try {
      const query = PreparedStatement('buscar-todas-categorias', SELECT_ALL_CATEGORIA, [idUsuario])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao cadastrar Categoria', error)
  }
}

export async function getCategoria(idCategoria) {
  try {
      const query = PreparedStatement('buscar-categoria', SELECT_CATEGORIA, [idCategoria])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao cadastrar Categoria', error)
  }
}

export async function verificarVinculoCategoria(idCategoria) {
  try {
      const query = PreparedStatement('verificar-vinculo-categoria', VERIFICA_VINCULO_CATEGORIA, [idCategoria])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao deletar Categoria', error)
  }
}

export async function deleteCategoria(idCategoria) {
  try {
      const query = PreparedStatement('deletar-categoria', DELETE_CATEGORIA, [idCategoria])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao deletar Categoria', error)
  }
}