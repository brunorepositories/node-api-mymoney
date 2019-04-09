import express from 'express'
import { criarUsuario } from '../controller/usuarioController';
import { criarConta, buscarContas } from '../controller/contaController';
import { criarCategoria, buscarCategorias } from '../controller/categoriaController';
const router = express.Router()

// Usuário
router.post('/usuario/criar', criarUsuario)

// Conta
router.post('/conta/criar', criarConta)
router.get('/conta/buscar/:id', buscarContas)

// Categoria
router.post('/categoria/criar', criarCategoria)
router.get('/categoria/buscar/:id', buscarCategorias)


export default router
