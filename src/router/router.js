import express from 'express'
import { teste } from '../controller/usuarioController.js'

const router = express.Router()

router.get('/', teste)

export default router
