import  pool  from "../db.js";



export const registerAsistencia = async (req,res) =>{


    const {dni, event_id, registration_time, update_asit, attended, aporte, peticion, nuevo, nombreinv} = req.body;
    try {
        const sql = `
          INSERT INTO asistencia 
            (dni, event_id, registration_time, update_asit, attended, aporte, peticion, nuevo, nombreinv) 
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
          RETURNING *;
        `;
      
        const { rows } = await pool.query(sql, [
          dni,
          event_id,
          registration_time,
          update_asit,
          attended,
          aporte,
          peticion,
          nuevo,
          nombreinv,
        ]);
      
        res.status(201).json({
          message: "Registro creado exitosamente",
          data: rows[0],
        });
      } catch (error) {
        if (error.code === "23505") {
          // Código de error para violación de restricción única
          res.status(409).json({
            message: "El registro ya existe",
          });
        } else {
          console.error("Error al registrar asistencia:", error);
          res.status(500).json({
            message: "Error interno del servidor",
            error: error.message,
          });
        }
      }
      

}