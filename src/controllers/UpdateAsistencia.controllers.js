import  pool  from "../db.js";



export const updateAsistencia = async (req,res) =>{

    const {dni, event_id, attended} = req.body;

    const sql = `UPDATE asistencia SET attended = ${attended} WHERE dni = '${dni}' AND event_id = ${event_id}`

    const {rows} = await pool.query(sql)
    res.status(200).json(rows[0])

}