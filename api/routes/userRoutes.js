// api/routes/userRoutes.js
// Middleware para manejar las rutas relacionadas con las cuentas de usuarios

const express = require('express');
const router = express.Router();

// Importar el controlador de usuarios
const userController = require('../controllers/userController');

// Definir rutas para operaciones relacionadas con usuarios
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:user_id', userController.getUserById);
router.put('/:user_id', userController.updateUser);
router.delete('/:user_id', userController.deleteUser);

module.exports = router;