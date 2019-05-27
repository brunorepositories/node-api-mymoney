import express from 'express'
import { criarUsuario } from '../controller/usuarioController'
import { criarConta,
         buscarTodasContas,
         deletarConta,
         buscarConta,
         alterarConta } from '../controller/contaController'

import { criarCategoria,
         buscarTodasCategorias,
         alterarCategoria,
         buscarCategoria,
         deletarCategoria } from '../controller/categoriaController'

import { criarSubCategoria,
         alterarSubCategoria,
         buscarTodasSubCategorias,
         buscarSubCategoria,
         deletarSubCategoria } from '../controller/subCategoriaController'

import { criarContato,
         alterarContato,
         buscarTodosContatos,
         buscarContato,
         deletarContato } from '../controller/contatoController'

const router = express.Router()

// Usuário
router.post('/usuario/criar', criarUsuario)

// Conta
router.post('/conta/criar', criarConta)
router.put('/conta/alterar', alterarConta)
router.get('/conta/buscar/todas/:idUsuario', buscarTodasContas)
router.get('/conta/buscar/:idConta', buscarConta)
router.delete('/conta/deletar/:idConta', deletarConta)

// Categoria
router.post('/categoria/criar', criarCategoria)
router.put('/categoria/alterar', alterarCategoria)
router.get('/categoria/buscar/todas', buscarTodasCategorias)
router.get('/categoria/buscar/:idCategoria', buscarCategoria)
router.delete('/categoria/deletar/:idCategoria', deletarCategoria)

// Sub-Categoria
router.post('/sub-categoria/criar', criarSubCategoria)
router.put('/sub-categoria/alterar', alterarSubCategoria)
router.get('/sub-categoria/buscar/todas', buscarTodasSubCategorias)
router.get('/sub-categoria/buscar/:idSubCategoria', buscarSubCategoria)
router.delete('/sub-categoria/deletar/:idSubCategoria', deletarSubCategoria)

// Contatos
router.post('/contatos/criar', criarContato)
router.put('/contatos/alterar', alterarContato)
router.get('/contatos/buscar/todos/:idUsuario', buscarTodosContatos)
router.get('/contatos/buscar/:idContato', buscarContato)
router.delete('/contatos/deletar/:idContato', deletarContato)

export default router
