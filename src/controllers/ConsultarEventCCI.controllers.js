import pool from "../db.js";

export const consultarEventCCI = async (req, res) => {
    
  const sql = `SELECT * FROM event_cci `;

  try {
    const { rows } = await pool.query(sql);

    if (rows.length > 0) {
      res.status(200).json(rows);
    } else {
      res.status(200).json(''); // Devuelve una cadena vacía si no se encontró ningún registro
    }
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};