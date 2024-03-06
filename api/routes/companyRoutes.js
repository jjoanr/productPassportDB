// api/routes/companyRoutes.js
// Middleware para manejar las rutas relacionadas con las compañias

const express = require('express');
const router = express.Router();

// Importar el controlador de compañias
const companyController = require('../controllers/companyController');

// Definir rutas para operaciones relacionadas con compañias
router.get('/', companyController.getAllCompanies);
router.post('/', companyController.createCompany);
router.get('/:companyId', companyController.getCompanyById);
router.put('/:companyId', companyController.updateCompany);
router.delete('/:companyId', companyController.deleteCompany);

module.exports = router;