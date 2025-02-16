import pool from "../db.js";

export const consultarAttend = async (req, res) => {
    const { dniList } = req.body;  // Recibe un array con varios DNIs
    console.log({ dniList });

    if (!dniList || dniList.length === 0) {
        return res.status(400).json({ message: "No se proporcionaron DNIs" });
    }

    // Generar placeholders para evitar SQL Injection
    const placeholders = dniList.map((_, i) => `$${i + 1}`).join(","); 

    const sql = `WITH LastFive AS (
    SELECT 
        dni, 
        attended,
        ROW_NUMBER() OVER (PARTITION BY dni ORDER BY update_asit DESC) AS row_num 
    FROM asistencia
    WHERE dni IN (${placeholders}) -- Aquí pasas el array de IDs 
)
SELECT 
    dni, 
    attended AS promedio
FROM LastFive
WHERE row_num <= 5;
`;
    try {
        const { rows } = await pool.query(sql, dniList); 
        console.log({ rows });
         // Enviar el array como parámetros seguros
        res.status(200).json(rows.length > 0 ? rows : []);
    } catch (error) {
        console.error("Error en la consulta:", error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};
