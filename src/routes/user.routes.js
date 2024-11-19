import {Router} from 'express'
import { registerAsistente } from '../controllers/ResgistroAsistente.controllers.js'
import { consultarAsistente } from '../controllers/ConsultarAsistente.controllers.js'
import { registerEvent } from '../controllers/RegistroEvento.controllers.js'
import { registerAsistencia } from '../controllers/RegistroAsistencia.controllers.js'
import { consultarAsistencia } from '../controllers/ConsultarAsistencia.controllers.js'
import { updateAsistencia } from '../controllers/UpdateAsistencia.controllers.js'
import { consultarAsistenciaEvent } from '../controllers/ConsultarAsistenciaEvent.js'
import { consultarEvento } from '../controllers/ConsultarEvento.controllers.js'
import { consultarRegistrados } from '../controllers/ConsultarRegistrados.controllers.js'
import { consultarEventCCI } from '../controllers/ConsultarEventCCI.controllers.js'

const router = Router()


//POST
router.post('/registerAsistente', registerAsistente)
router.post('/registerEvent', registerEvent)
router.post('/resgisterAsistencia', registerAsistencia)


//POST FOR GET 
router.post('/consultarAsistente', consultarAsistente)
router.post('/consultarAsistencia', consultarAsistencia)
router.post('/consultarAsistenciaEvent', consultarAsistenciaEvent)
router.post('/consultarEvento', consultarEvento)


//POST FOR UPDATE
router.post('/updateAsistencia', updateAsistencia)


//GET 
router.get('/consultarRegistrados', consultarRegistrados)
router.get('/consultarEventCCI', consultarEventCCI)



export default router
