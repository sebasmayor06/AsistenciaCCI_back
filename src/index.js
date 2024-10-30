import express from 'express'
import userRoutes from './routes/user.routes.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'



const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(userRoutes)


app.listen(3000, () => {

    console.log('Server is listening on port: ', 3000);
})

