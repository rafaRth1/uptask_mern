import express from 'express';
import {
   agregarTarea,
   obtenerTarea,
   actualizarTarea,
   eliminarTarea,
   cambiarEstado,
} from '../Controllers/tareaController.js';
import checkAuth from '../Middleware/checkAuth.js';

const router = express.Router();

router.post('/', checkAuth, agregarTarea);
router
   .route('/:id')
   .get(checkAuth, obtenerTarea)
   .put(checkAuth, actualizarTarea)
   .delete(checkAuth, eliminarTarea);

router.post('/estado/:id', checkAuth, cambiarEstado);

export default router;
