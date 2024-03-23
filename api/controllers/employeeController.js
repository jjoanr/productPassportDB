// api/controllers/employeeController.js
// Controlador para manejar las peticiones de cuentas de empleados

const db = require('../../db/connection');

const getAllEmployees = async (req, res) => {
  // Lógica para obtener todas las cuentas de empleados de la base de datos
  try {
    const [rows, fields] = await db.query('SELECT * FROM employee_accounts');
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createEmployee = async (req, res) => {
  // Lógica para crear una nueva cuenta de empleado en la base de datos
  const { employee_account_id, company_id, username, password, email } = req.body;
  try {
    const [rows, fields] = await db.query('INSERT INTO employee_accounts (employee_account_id, company_id, username, password, email) VALUES (?, ?, ?, ?, ?)', 
    [employee_account_id, company_id, username, password, email]);

    res.status(201).json({ message: 'Employee account created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const validateCredentials = async (req, res) => {
  // Logica para verificar credenciales de un empleado
  const { employee_account_id, password } = req.body;
  try {
    const [rows, fields] = await db.query('SELECT * FROM employee_accounts WHERE employee_account_id = ?', [employee_account_id]);

    if(rows.length === 0) {
      return res.status(404).json({ message: 'Employee not found' });
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

const getEmployeeById = async (req, res) => {
  // Lógica para obtener una cuenta de empleado por su ID de la base de datos
  const employee_account_id = req.params.employee_account_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM employee_accounts WHERE employee_account_id = ?', [employee_account_id]);
    if(rows.length === 0) {
      return res.status(404).json({ message: 'Employee account not found' });
    }
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateEmployee = async (req, res) => {
  // Lógica para actualizar una cuenta de empleado en la base de datos
  const { company_id, username, password, email } = req.body;
  const employee_account_id = req.params.employee_account_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM employee_accounts WHERE employee_account_id = ?', [employee_account_id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Employee account not found' });
    }
    await db.query('UPDATE employee_accounts SET company_id = ?, username = ?, password = ?, email = ? WHERE user_id = ?', 
    [company_id, username, password, email, employee_account_id]);
    res.status(201).json({ message: 'Employee account updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteEmployee = async (req, res) => {
  // Lógica para eliminar una cuenta de empleado de la base de datos
  const employee_account_id = req.params.employee_account_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM employee_accounts WHERE employee_account_id = ?', [employee_account_id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Employee account not found' });
    }
    await db.query('DELETE FROM employee_accounts WHERE employee_account_id = ?', [employee_account_id]);
    res.status(201).json({ message: 'Employee account deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllEmployees,
  createEmployee,
  validateCredentials,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
};
