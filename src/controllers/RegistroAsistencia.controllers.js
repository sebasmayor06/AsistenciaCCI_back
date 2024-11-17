import  pool  from "../db.js";



export const registerAsistencia = async (req,res) =>{

    console.log(req.body.nuevo);
    

    const {dni, event_id, registration_time, update_asit, attended, aporte, peticion, nuevo, nombreinv} = req.body;
    const sql = `INSERT INTO asistencia (dni, event_id, registration_time, update_asit, attended, aporte, peticion, nuevo, nombreinv) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`
    
    const {rows} = await pool.query(sql, [dni, event_id, registration_time, update_asit, attended, aporte, peticion, nuevo, nombreinv])
    res.status(200).json(rows[0])

}