// api/controllers/userController.js
//Controlador para manejar las peticiones de usuarios

const db = require('../../db/connection');

const getAllUsers = async (req, res) => {
  // Logica para obtener todos los usuarios de la base de datos
  try {
    const [rows, fields] = await db.query('SELECT * FROM user_accounts');
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createUser = async (req, res) => {
  // Logica para crear un usuario en la base de datos
  const { user_id, username, password, email } = req.body;
  try {
    const [rows, fields] = await db.query('INSERT INTO user_accounts (user_id, username, password, email) VALUES (?, ?, ?, ?)', 
    [user_id, username, password, email]);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const validateCredentials = async (req, res) => {
  // Logica para verificar credenciales de un usuario
  const { username, password } = req.body;
  try {
    const [rows, fields] = await db.query('SELECT * FROM user_accounts WHERE username = ?', [username]);
    if(rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    const storedPassword = rows[0].password;
    if(storedPassword === password) {
      return res.status(201).json({ message: 'Credentials validated successfully' });
    } else {
      return res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getUserByUsername = async (req, res) => {
  // Logica para obtener un usuario de la base de datos
  const username = req.params.username;
  try {
    const [rows, fields] = await db.query('SELECT * FROM user_accounts WHERE username = ?', [username]);
    if(rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateUser = async (req, res) => {
  // Logica para actualizar un usuario en la base de datos
  const { username, email, password } = req.body;
  const oldUsername = req.params.username;
  try {
    const [rows, fields] = await db.query('SELECT * FROM user_accounts WHERE username = ?', [oldUsername]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    await db.query('UPDATE user_accounts SET username = ?, email = ?, password = ? WHERE username = ?', 
    [username, email, password, oldUsername]);

    res.status(201).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteUser = async (req, res) => {
  // Logica para eliminar un usuario de la base de datos
  const username = req.params.username;
  try {
    const [rows, fields] = await db.query('SELECT * FROM user_accounts WHERE username = ?', [username]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    await db.query('DELETE FROM user_accounts WHERE username = ?', [username]);
    res.status(201).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  validateCredentials,
  getUserByUsername,
  updateUser,
  deleteUser
};