import express from 'express';
import {
   obtenerProyecto,
   nuevoProyecto,
   obtenerProyectos,
   editarProyecto,
   eliminarColaborador,
   agregarColaborador,
   eliminarProyecto,
} from '../Controllers/proyectoController.js';
import checkAuth from '../Middleware/checkAuth.js';

const router = express.Router();

router
   .route('/')
   .get(checkAuth, obtenerProyectos)
   .post(checkAuth, nuevoProyecto);

router
   .route('/:id')
   .get(checkAuth, obtenerProyecto)
   .put(checkAuth, editarProyecto)
   .delete(checkAuth, eliminarProyecto);

router.post('/agregar-colaborador/:id', checkAuth, agregarColaborador);
router.post('/eliminar-colaborador/:id', checkAuth, eliminarColaborador);

export default router;
