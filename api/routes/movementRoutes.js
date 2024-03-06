// api/routes/movementRoutes.js
// Middleware para manejar las rutas relacionadas con los movimientos

const express = require('express');
const router = express.Router();

// Importar el controlador de movimientos
const movementController = require('../controllers/movementController');

// Definir las rutas para el controlador de movimientos
router.get('/', movementController.getAllMovements);
router.post('/', movementController.createMovement);
router.get('/:movementId', movementController.getMovementById);
router.put('/:movementId', movementController.updateMovement);
router.delete('/:movementId', movementController.deleteMovement);

module.exports = router;