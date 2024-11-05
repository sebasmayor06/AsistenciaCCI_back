import {Router} from 'express'
import { registerAsistente } from '../controllers/ResgistroAsistente.controllers.js'
import { consultarAsistente } from '../controllers/ConsultarAsistente.controllers.js'
import { registerEvent } from '../controllers/RegistroEvento.controllers.js'
import { registerAsistencia } from '../controllers/RegistroAsistencia.controllers.js'
import { consultarAsistencia } from '../controllers/ConsultarAsistencia.controllers.js'
import { updateAsistencia } from '../controllers/UpdateAsistencia.controllers.js'

const router = Router()


//POST
router.post('/registerAsistente', registerAsistente)
router.post('/registerEvent', registerEvent)
router.post('/resgisterAsistencia', registerAsistencia)


//POST FOR GET 
router.post('/consultarAsistente', consultarAsistente)
router.post('/consultarAsistencia', consultarAsistencia)


//POST FOR UPDATE
router.post('/updateAsistencia', updateAsistencia)


export default router
