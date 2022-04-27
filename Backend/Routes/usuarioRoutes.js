import express from 'express';
import {
   registrar,
   autenticar,
   confirmar,
   olvidePassword,
   comprobarToken,
   nuevoPassword,
   perfil,
} from '../Controllers/usuarioController.js';
import checkAuth from '../Middleware/checkAuth.js';

const router = express.Router();

// Autenticacion, Registro y Confirmacion de Usuarios
router.post('/', registrar); // Crear un nuevo usuario
router.post('/login', autenticar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword);

router.get('/perfil', checkAuth, perfil);

export default router;
