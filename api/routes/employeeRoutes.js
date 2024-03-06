// api/routes/employeeRoutes.js
// Middleware para manejar las rutas relacionadas con las cuentas de empleados

const express = require('express');
const router = express.Router();

// Importar el controlador de cuentas de empleados
const employeeController = require('../controllers/employeeController');

// Define routes for employee-related operations
router.get('/', employeeController.getAllEmployees);
router.post('/', employeeController.createEmployee);
router.get('/:employeeId', employeeController.getEmployeeById);
router.put('/:employeeId', employeeController.updateEmployee);
router.delete('/:employeeId', employeeController.deleteEmployee);

module.exports = router;