import  pool  from "../db.js";



export const registerAsistente = async (req,res) =>{

    const {dni, full_name, estado_civil, phone_number, fecha_de_nacimiento, ciudad, barrio, direccion, bautizo, registration_time} = req.body;
    const sql = `INSERT INTO asistentes (dni, full_name, estado_civil, phone_number, fecha_de_nacimiento, ciudad, barrio, direccion, bautizo, registration_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`

    const {rows} = await pool.query(sql, [dni, full_name, estado_civil, phone_number, fecha_de_nacimiento, ciudad, barrio, direccion, bautizo, registration_time])
    res.status(200).json(rows[0])

}