import pool from "../db.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authUser = async (req, res) => {
    const {username , password} = req.body
    

    const generateAccessToken = (username) => {
        return jwt.sign({username}, process.env.ACCESS_TOKEN_SECRET, {expiresIn
        : '1200  s'})
    }

    const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;


  try {
    const { rows } = await pool.query(sql);
    const accessToken = generateAccessToken(username)

    if (rows.length > 0) {
    //   res.status(200).json(rows);
    res.header('Authorization', accessToken).json({
        accessToken: accessToken,
        message: 'Usuario autenticado',
        rol: rows[0].rol,
        user: rows[0].username
    });
    }else{
    res.header().json({message: 'Usuario o contraseña incorrectos', accessToken: null, rol: null, user: null})
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export  const validateToken = (req, res, next) => {
    
    const accessToken = req.headers['authorization']
    if(!accessToken) {
       return res.status(403).json({message:'accesso denegado'})
    }

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user, rol) => {
        if(err) {
           return res.status(403).json({message:'accesso denegado, token expirado o incorrecto'})
        }else{
            req.user = {user, rol}
            next()
        }
    })
}