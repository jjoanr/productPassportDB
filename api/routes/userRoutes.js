// api/routes/userRoutes.js
// Middleware para manejar las rutas relacionadas con las cuentas de usuarios

const express = require('express');
const router = express.Router();

// Importar el controlador de usuarios
const userController = require('../controllers/userController');

// Definir rutas para operaciones relacionadas con usuarios
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.post('/validate', userController.validateCredentials);
router.get('/:username', userController.getUserByUsername);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.deleteUser);

module.exports = router;