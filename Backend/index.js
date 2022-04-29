import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './Config/db.js';
import usuarioRoutes from './Routes/usuarioRoutes.js';
import proyectoRoute from './Routes/proyectoRoutes.js';
import tareaRoutes from './Routes/tareaRoutes.js';

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];
const corsOptions = {
   origin: function (origin, callback) {
      if (whitelist.includes(origin)) {
         // Puede consultar la API
         callback(null, true);
      } else {
         // NO esta permitido
         callback(new Error('Error de CORS'));
      }
   },
};

app.use(cors(corsOptions));

// Routing
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/proyectos', proyectoRoute);
app.use('/api/tareas', tareaRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
   console.log(`Servidor corriendo en el puerto, ${PORT}`);
});
