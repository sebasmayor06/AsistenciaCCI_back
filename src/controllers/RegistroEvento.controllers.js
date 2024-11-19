import  pool  from "../db.js";



export const registerEvent = async (req,res) =>{

    const {event_name, event_date, location, id_eventos_cci} = req.body;
    
    const sql = `INSERT INTO eventos (event_name, event_date, location, id_eventos_cci) VALUES ($1, $2, $3, $4) RETURNING *`
    const {rows} = await pool.query(sql, [event_name, event_date, location, id_eventos_cci])
    res.status(200).json(rows[0])

}