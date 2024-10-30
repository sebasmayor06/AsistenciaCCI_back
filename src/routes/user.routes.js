import {Router} from 'express'
import { registerAsistente } from '../controllers/ResgistroAsistente.controllers.js'
import { consultarAsistente } from '../controllers/ConsultarAsistente.controllers.js'

const router = Router()


//POST
router.post('/registerAsistente', registerAsistente)


//POST FOR GET 
router.post('/consultarAsistente', consultarAsistente)


export default router
