// api/routes/movementRoutes.js
// Middleware para manejar las rutas relacionadas con los movimientos

const express = require('express');
const router = express.Router();

// Importar el controlador de movimientos
const movementController = require('../controllers/movementController');

// Definir las rutas para el controlador de movimientos
router.get('/', movementController.getAllMovements);
router.post('/', movementController.createMovement);
router.get('/:movement_code', movementController.getMovement);
router.get('/product/:product_id', movementController.getMovementsByProductId);
//router.put('/:movement_id', movementController.updateMovement);
router.delete('/:movement_code', movementController.deleteMovement);

module.exports = router;