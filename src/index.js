import express from 'express'
import userRoutes from './routes/user.routes.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

const app = express();

app.use(cors({
    origin: "https://asistencia-cci-front-dc13af93f3e4.herokuapp.com",
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

