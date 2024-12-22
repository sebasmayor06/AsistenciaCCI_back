import  pool  from "../db.js";



export const updateComida = async (req,res) =>{

    const {dni, event_id, comida} = req.body;

    const sql = `UPDATE asistencia SET comida = ${comida} WHERE dni = '${dni}' AND event_id = ${event_id}`

    const {rows} = await pool.query(sql)
    res.status(200).json(rows[0])

}