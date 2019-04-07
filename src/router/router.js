import express from 'express'
import { criarUsuario } from '../controller/usuarioController';
import { criarConta } from '../controller/contaController';
import { criarCategoria } from '../controller/categoriaController';
const router = express.Router()

// Usuário
router.post('/usuario/criar', criarUsuario)

// Conta
router.post('/conta/criar', criarConta)

// Categoria
router.post('/categoria/criar', criarCategoria)


export default router
