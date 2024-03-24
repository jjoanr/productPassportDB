// api/routes/employeeRoutes.js
// Middleware para manejar las rutas relacionadas con las cuentas de empleados

const express = require('express');
const router = express.Router();

// Importar el controlador de cuentas de empleados
const employeeController = require('../controllers/employeeController');

// Define routes for employee-related operations
router.get('/', employeeController.getAllEmployees);
router.post('/', employeeController.createEmployee);
router.post('/validate', employeeController.validateCredentials);
router.get('/:employee_code', employeeController.getEmployee);
router.put('/:employee_code', employeeController.updateEmployee);
router.delete('/:employee_code', employeeController.deleteEmployee);

module.exports = router;