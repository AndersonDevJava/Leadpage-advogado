import { Router } from 'express'
import { validarCreateUser } from '../middlewares/middlewares.js'
import { criarContatoContoller } from '../controllers/controllers.js'

const router = Router()

router.post('/', validarCreateUser, criarContatoContoller)

export { router }