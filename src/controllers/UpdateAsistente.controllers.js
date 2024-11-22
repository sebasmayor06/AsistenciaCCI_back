import pool from "../db.js";

export const updateAsistente = async (req, res) => {
  const { dni } = req.params; // El DNI viene como parámetro en la URL
  const { full_name, estado_civil, phone_number, fecha_de_nacimiento, ciudad, barrio, direccion, bautizo } = req.body;

  try {
    // Consulta SQL para actualizar todos los campos del asistente
    const sql = `
      UPDATE asistentes 
      SET 
        full_name = $1,
        estado_civil = $2,
        phone_number = $3,
        fecha_de_nacimiento = $4,
        ciudad = $5,
        barrio = $6,
        direccion = $7,
        bautizo = $8
      WHERE dni = $9
      RETURNING *;
    `;

    // Ejecutar la consulta con los valores proporcionados
    const { rows } = await pool.query(sql, [
      full_name,
      estado_civil,
      phone_number,
      fecha_de_nacimiento,
      ciudad,
      barrio,
      direccion,
      bautizo,
      dni,
    ]);

    // Verificar si el registro fue encontrado
    if (rows.length === 0) {
      return res.status(404).json({ message: "Asistente no encontrado" });
    }

    res.status(200).json(rows[0]); // Retornar el registro actualizado
  } catch (error) {
    console.error("Error al actualizar el asistente:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
