import  pool  from "../db.js";



export const registerAsistente = async (req,res) =>{

    const {dni, full_name, estado_civil, phone_number, edad, ciudad, barrio, direccion, bautizo, aporte, peticion, nuevo, nombreinv} = req.body;
    const {rows} = await pool.query('INSERT INTO asistentes (dni, full_name, estado_civil, phone_number, edad, ciudad, barrio, direccion, bautizo, aporte, peticion, nuevo, nombreinv) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *', [dni, full_name, estado_civil, phone_number, edad, ciudad, barrio, direccion, bautizo, aporte, peticion, nuevo, nombreinv])
    res.status(200).json(rows[0])

}