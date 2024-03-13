// api/controllers/companyController.js
//Controlador para manejar las peticiones de compañias

const getAllCompanies = async (req, res) => {
  // Logica para obtener todas las compañias de la base de datos
  try {
    const [rows, fields] = await db.query('SELECT * FROM companies');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createCompany = async (req, res) => {
  // Logica para crear una nueva compañia en la base de datos
  const { company_id, name, address, phone_number, email } = req.body;
  try {
    const [rows, fields] = await db.query('INSERT INTO companies (company_id, name, address, phone_number, email) VALUES (?, ?, ?, ?, ?)', [company_id, name, address, phone_number, email]);
    res.status(201).json({ message: 'Company created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getCompanyById = async (req, res) => {
  // Logica para obtener una compañia por ID de la base de datos
  const company_id = req.params.company_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM companies WHERE company_id = ?', [company_id]);
    if(rows.length === 0) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateCompany = async (req, res) => {
  // Logica para actualizar una compañia en la base de datos
  const { name, address, phone_number, email } = req.body;
  const company_id = req.params.company_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM companies WHERE company_id = ?', [company_id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Company not found' });
    }
    await db.query('UPDATE companies SET name = ?, address = ?, phone_number = ?, email = ? WHERE company_id = ?', [name, address, phone_number, email, company_id]);
    res.json({ message: 'Company updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteCompany = async (req, res) => {
  // Logica para eliminar una compañia de la base de datos
  const company_id = req.params.company_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM companies WHERE company_id = ?', [company_id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Company not found' });
    }
    await db.query('DELETE FROM companies WHERE company_id = ?', [company_id]);
    res.json({ message: 'Company deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllCompanies,
  createCompany,
  getCompanyById,
  updateCompany,
  deleteCompany
};