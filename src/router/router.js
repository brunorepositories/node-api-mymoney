import express from 'express'
import { criarUsuario } from '../controller/usuarioController';
import { criarConta, buscarTodasContas, deletarConta, buscarConta, alterarConta } from '../controller/contaController';
import { criarCategoria, buscarTodasCategorias, alterarCategoria, buscarCategoria, deletarCategoria } from '../controller/categoriaController';
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

export default router
