// api/controllers/movementController.js
// Controlador para manejar las peticiones de movimientos

const db = require('../../db/connection');

const getAllMovements = async (req, res) => {
  // Lógica para obtener todos los movimientos de la base de datos
  try {
    const [rows, fields] = await db.query('SELECT * FROM movements');
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createMovement = async (req, res) => {
  // Lógica para crear un nuevo movimiento en la base de datos
  const { movement_code, product_id, employee_id, movement_type, movement_date, description } = req.body;
  try {
    const [rows, fields] = await db.query('INSERT INTO movements (movement_code, product_id, employee_id, movement_type, movement_date, description) VALUES (?, ?, ?, ?, ?, ?)', 
    [movement_code, product_id, employee_id, movement_type, movement_date, description]);

    res.status(201).json({ message: 'Movement created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getMovement = async (req, res) => {
  // Lógica para obtener un movimiento por su ID de la base de datos
  const movement_code = req.params.movement_code;
  try {
    const [rows, fields] = await db.query('SELECT * FROM movements WHERE movement_code = ?', [movement_code]);
    if(rows.length === 0) {
      return res.status(404).json({ message: 'Movement not found' });
    }
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getMovementsByProductId = async (req, res) => {
  // Lógica para obtener un movimiento por la ID del producto
  const product_id = req.params.product_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM movements WHERE product_id = ?', [product_id]);
    if(rows.length === 0) {
      return res.status(404).json({ message: 'Movements not found' });
    }
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

/*
const updateMovement = async (req, res) => {
  // Lógica para actualizar un movimiento en la base de datos
  const { product_id, employee_account_id, movement_type, movement_date, description } = req.body;
  const movement_id = req.params.movement_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM movements WHERE movement_id = ?', [movement_id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Movement not found' });
    }
    await db.query('UPDATE movements SET product_id = ?, employee_account_id = ?, movement_type = ?, movement_date = ?, description = ? WHERE movement_id = ?',
    [product_id, employee_account_id, movement_type, movement_date, description, movement_id]);
    
    res.status(201).json({ message: 'Movement updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
*/

const deleteMovement = async (req, res) => {
  // Lógica para eliminar un movimiento de la base de datos
  const movement_code = req.params.movement_code;
  try {
    const [rows, fields] = await db.query('SELECT * FROM movements WHERE movement_code = ?', [movement_code]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Movement not found' });
    }
    await db.query('DELETE FROM movement WHERE movement_code = ?', [movement_code]);
    res.status(201).json({ message: 'Movement deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllMovements,
  createMovement,
  getMovement,
  getMovementsByProductId,
  //updateMovement,
  deleteMovement
};