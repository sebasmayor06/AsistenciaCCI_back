import express from 'express';
import userRoutes from './routes/user.routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

// Lista de orígenes explícitos y regex para el dominio iglesiacci.com
const allowedOrigins = [
    "https://asistencia-cci-front-dc13af93f3e4.herokuapp.com",
    "http://localhost:5173",
    "http://localhost:3001"
];
const allowedOriginRegex = /^(https?:\/\/)?(www\.)?iglesiacci\.com$/i;

app.use(cors({
    origin: function (origin, callback) {
        // Permitir solicitudes sin 'origin' (como mobile apps o curl)
        if (!origin) return callback(null, true);

        // Validar origen en la lista o mediante regex
        if (allowedOrigins.includes(origin) || allowedOriginRegex.test(origin)) {
            return callback(null, true);
        }

        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
    },
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
