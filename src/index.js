import express from 'express';
import userRoutes from './routes/user.routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Lista de orígenes permitidos
const allowedOrigins = [
  'http://localhost:5173', // Para desarrollo
  'https://asistencia-cci-front-dc13af93f3e4.herokuapp.com' // Para producción (sin barra al final)
];

// Configuración de CORS
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true); // Permitir solicitudes sin 'origin'
        
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        
        return callback(null, true);
    },
    credentials: true
}));

// Manejo de solicitudes preflight para cualquier ruta
app.options('*', cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        
        return callback(null, true);
    },
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(userRoutes);

// Usar process.env.PORT para permitir que Heroku asigne el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
