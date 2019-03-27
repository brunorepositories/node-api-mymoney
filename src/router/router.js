import express from 'express'
import { criarUsuario } from '../controller/usuarioController';

const router = express.Router()

// usuário
router.post('/usuario/criar', criarUsuario)

export default router
