import express from 'express'
import { criarUsuario } from '../controller/usuarioController';
import { criarConta } from '../controller/contaController';

const router = express.Router()

// Usuário
router.post('/usuario/criar', criarUsuario)

// Conta
router.post('/conta/criar', criarConta)

export default router
