import express from 'express'
import userRoutes from './routes/user.routes.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

const app = express();

// Configuración de CORS para desarrollo. Podrías necesitar ajustar esto para producción
app.use(cors({
    origin: "https://asistencia-cci-front-dc13af93f3e4.herokuapp.com", // Asegúrate de cambiar esto o hacerlo dinámico en producción
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

