// api/controllers/companyController.js
//Controlador para manejar las peticiones de compañias

const db = require('../../db/connection');

const getAllCompanies = async (req, res) => {
  // Logica para obtener todas las compañias de la base de datos
  try {
    const [rows, fields] = await db.query('SELECT * FROM companies');
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createCompany = async (req, res) => {
  // Logica para crear una nueva compañia en la base de datos
  const { company_code, company_name, address, phone_number, email } = req.body;
  try {
    const [rows, fields] = await db.query('INSERT INTO companies (company_code, company_name, address, phone_number, email) VALUES (?, ?, ?, ?, ?)', 
    [company_code, company_name, address, phone_number, email]);

    res.status(201).json({ message: 'Company created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getCompanyById = async (req, res) => {
  // Obtener datos compañía por id
  const company_id = req.params.company_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM companies WHERE company_id = ?', [company_id]);
    if(rows.length === 0) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getCompanyByCode = async (req, res) => {
  // Logica para obtener una compañia por company_code de la base de datos
  const company_code = req.params.company_code;
  try {
    const [rows, fields] = await db.query('SELECT * FROM companies WHERE company_code = ?', [company_code]);
    if(rows.length === 0) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateCompany = async (req, res) => {
  // Logica para actualizar una compañia en la base de datos
  const { company_name, address, phone_number, email } = req.body;
  const company_code = req.params.company_code;
  try {
    const [rows, fields] = await db.query('SELECT * FROM companies WHERE company_code = ?', [company_code]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Company not found' });
    }
    await db.query('UPDATE companies SET company_name = ?, address = ?, phone_number = ?, email = ? WHERE company_code = ?', 
    [company_name, address, phone_number, email, company_code]);

    res.status(201).json({ message: 'Company updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteCompany = async (req, res) => {
  // Logica para eliminar una compañia de la base de datos
  const company_code = req.params.company_code;
  try {
    const [rows, fields] = await db.query('SELECT * FROM companies WHERE company_code = ?', [company_code]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Company not found' });
    }
    await db.query('DELETE FROM companies WHERE company_code = ?', [company_code]);
    res.status(201).json({ message: 'Company deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllCompanies,
  createCompany,
  getCompanyById,
  getCompanyByCode,
  updateCompany,
  deleteCompany
};
