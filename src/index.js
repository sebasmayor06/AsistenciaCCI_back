import express from 'express';
import userRoutes from './routes/user.routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Configuración de CORS para producción
app.use(cors({
    origin: "https://asistencia-cci-front-dc13af93f3e4.herokuapp.com", // URL de tu frontend en producción
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization' // Cabeceras permitidas
}));

// Manejo de solicitudes preflight (OPTIONS)
app.options('*', cors({
    origin: "https://asistencia-cci-front-dc13af93f3e4.herokuapp.com",
    credentials: true,
}));

// Configuración de otros middlewares
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(userRoutes);

// Manejador de errores para CORS
app.use((err, req, res, next) => {
    if (err) {
        console.error("Error de CORS:", err.message);
        res.status(500).send({ error: err.message });
    } else {
        next();
    }
});

// Usar process.env.PORT para permitir que Heroku asigne el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
