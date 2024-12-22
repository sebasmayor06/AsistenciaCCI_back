import pool from "../db.js";

export const consultarAsistencia = async (req, res) => {
    const {fecha} = req.body

  const sql = `SELECT 
  asist.full_name,
  asi.dni,
  asist.barrio,
  asi.attended,
  asi.event_id,
  asist.phone_number,
  asist.ciudad,
  asi.nuevo,
  asi.nombreinv,
  asist.fecha_de_nacimiento,
  ev.event_date,
  asi.registration_time,
  asi.comida
FROM asistencia AS asi
INNER JOIN asistentes AS asist
  ON asi.dni = asist.dni
INNER JOIN eventos AS ev
  ON ev.event_id = asi.event_id
WHERE ev.event_date = '${fecha}'
ORDER BY asist.full_name ASC;

  `;

  try {
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
