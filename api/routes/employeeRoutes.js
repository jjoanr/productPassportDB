// api/routes/employeeRoutes.js
// Middleware para manejar las rutas relacionadas con las cuentas de empleados

const express = require('express');
const router = express.Router();

// Importar el controlador de cuentas de empleados
const employeeController = require('../controllers/employeeController');

// Define routes for employee-related operations
router.get('/', employeeController.getAllEmployees);
router.post('/', employeeController.createEmployee);
router.get('/:employee_id', employeeController.getEmployeeById);
router.put('/:employee_id', employeeController.updateEmployee);
router.delete('/:employee_id', employeeController.deleteEmployee);

module.exports = router;