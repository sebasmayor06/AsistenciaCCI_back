import pool from "../db.js";

export const consultarEvento = async (req, res) => {
    
  const { eventId } = req.body;
  let sql = ``

  if (eventId !== 0) {
    
     sql = `SELECT * FROM eventos WHERE event_id = '${eventId}'`;
     try {
      const { rows } = await pool.query(sql);
      
      if (rows.length > 0) {
        res.status(200).json(rows[0]);
      } else {
        res.status(200).json(''); // Devuelve una cadena vacía si no se encontró ningún registro
      }
    } catch (error) {
      console.error('Error en la consulta:', error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }else{
     sql = `SELECT * FROM eventos `
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
  }




};