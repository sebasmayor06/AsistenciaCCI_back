import pool from "../db.js";

export const consultarAsistenciaEvent = async (req, res) => {

  const {eventId} = req.body.event_id

  try {
    const sql = `SELECT * FROM asistencia WHERE event_id = ${eventId}`;
    const { rows } = await pool.query(sql);

    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(200).json(''); 
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};