import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './Config/db.js';
import usuarioRoutes from './Routes/usuarioRoutes.js';
import proyectoRoute from './Routes/proyectoRoutes.js';
import tareaRoutes from './Routes/tareaRoutes.js';

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Routing
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/proyectos', proyectoRoute);
app.use('/api/tareas', tareaRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
   console.log(`Servidor corriendo en el puerto, ${PORT}`);
});
