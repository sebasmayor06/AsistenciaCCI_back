import  pool  from "../db.js";



export const consultarAsistente = async (req,res) =>{
    const {dni} = req.body
    const sql = `SELECT * FROM asistentes WHERE dni = '${dni}'`

    const {rows} = await pool.query(sql)
    res.status(200).json(rows[0])

}