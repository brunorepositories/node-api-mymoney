import db from '../db/db.js'
import ErrorHendler from '../functions/errorHendler.js'
import { PreparedStatement } from 'pg-promise'
import { INSERT_SUB_CATEGORIA,
         SELECT_ALL_SUB_CATEGORIA,
         SELECT_SUB_CATEGORIA,
         ALTER_SUB_CATEGORIA,
         VERIFICA_VINCULO_SUB_CATEGORIA,
         DELETE_SUB_CATEGORIA } from '../db/queries.js'


export async function cadastrarSubCategoria(subCategoria) {
   try {
      const query = PreparedStatement('cadastrar-subCategoria', INSERT_SUB_CATEGORIA, [subCategoria.descricao, subCategoria.idCategoria])
      const result = await db.oneOrNone(query)
      return result
   } catch (error) {
      return new ErrorHendler('Erro ao cadastrar SubCategoria', error)
}
}

export async function alterSubCategoria(subCategoria) {
  try {
      const query = PreparedStatement('alterar-subCategoria', ALTER_SUB_CATEGORIA, [subCategoria.subCategoria, subCategoria.descricao])
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao alterar SubCategoria', error)
  }
}

export async function getAllSubCategorias(idUsuario) {
  try {
      const query = PreparedStatement('buscar-todas-subCategorias', SELECT_ALL_SUB_CATEGORIA, [idUsuario])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao cadastrar SubCategoria', error)
  }
}

export async function getSubCategoria(idSubCategoria) {
  try {
      const query = PreparedStatement('buscar-subCategoria', SELECT_SUB_CATEGORIA, [idSubCategoria])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao cadastrar SubCategoria', error)
  }
}

export async function verificarVinculoSubCategoria(idSubCategoria) {
  try {
      const query = PreparedStatement('verificar-vinculo-subCategoria', VERIFICA_VINCULO_SUB_CATEGORIA, [idSubCategoria])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao deletar SubCategoria', error)
  }
}

export async function deleteSubCategoria(idSubCategoria) {
  try {
      const query = PreparedStatement('deletar-subCategoria', DELETE_SUB_CATEGORIA, [idSubCategoria])
      console.log(query)
      const result = await db.oneOrNone(query)
      return result
  } catch (error) {
      return new ErrorHendler('Erro ao deletar SubCategoria', error)
  }
}