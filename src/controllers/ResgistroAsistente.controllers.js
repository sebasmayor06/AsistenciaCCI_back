import  pool  from "../db.js";



export const registerAsistente = async (req,res) =>{

    const {dni, full_name, estado_civil, phone_number, fecha_de_nacimiento, ciudad, barrio, direccion, bautizo} = req.body;
    const sql = `INSERT INTO asistentes (dni, full_name, estado_civil, phone_number, fecha_de_nacimiento, ciudad, barrio, direccion, bautizo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`

    console.log(" SQL resg asistente: ", sql);

    const {rows} = await pool.query(sql, [dni, full_name, estado_civil, phone_number, fecha_de_nacimiento, ciudad, barrio, direccion, bautizo])
    res.status(200).json(rows[0])

}