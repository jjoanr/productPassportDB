// api/routes/productRoutes.js
// Middleware para manejar las rutas relacionadas con los prodctos

const express = require('express');
const router = express.Router();

// Importar el controlador de productos
const productController = require('../controllers/productController');

// Definir rutas para operaciones relacionadas con productos
router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.get('/:product_id', productController.getProductById);
router.put('/:product_id', productController.updateProduct);
router.delete('/:product_id', productController.deleteProduct);

module.exports = router;