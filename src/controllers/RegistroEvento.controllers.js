import  pool  from "../db.js";



export const registerEvent = async (req,res) =>{

    const {event_name, event_date, location} = req.body;
    
    const sql = `INSERT INTO eventos (event_name, event_date, location) VALUES ($1, $2, $3) RETURNING *`
    const {rows} = await pool.query(sql, [event_name, event_date, location])
    res.status(200).json(rows[0])

}