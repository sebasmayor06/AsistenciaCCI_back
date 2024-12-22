import pg from "pg";
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    // ssl: {
    //     rejectUnauthorized: false  // Necesario para conexiones SSL en Heroku
    // },
    client_encoding: "UTF8",
});

export default pool;
