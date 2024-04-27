// api/routes/companyRoutes.js
// Middleware para manejar las rutas relacionadas con las compañias

const express = require('express');
const router = express.Router();

// Importar el controlador de compañias
const companyController = require('../controllers/companyController');

// Definir rutas para operaciones relacionadas con compañias
router.get('/', companyController.getAllCompanies);
router.post('/', companyController.createCompany);
router.get('/:company_code', companyController.getCompanyByCode);
router.get('/:company_id', companyController.getCompanyById);
router.put('/:company_code', companyController.updateCompany);
router.delete('/:company_code', companyController.deleteCompany);

module.exports = router;
