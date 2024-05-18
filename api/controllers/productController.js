// api/controllers/productController.js
// Controlador para manejar las peticiones de productos

const express = require('express');
const fs = require('fs');
const db = require('../../db/connection');
const path = require('path');

const getAllProducts = async (req, res) => {
  // Lógica para obtener todos los productos de la base de datos
  try {
    const [rows, fields] = await db.query('SELECT * FROM products');
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createProduct = async (req, res) => {
  try {
    const { serial_number, product_name, description, manufacturer_id, production_date, status, image_base64 } = req.body;

    const imageBuffer = Buffer.from(image_base64, 'base64');
    const imagePath = path.join(__dirname, '../../uploads', `${serial_number}.jpg`);

    fs.writeFileSync(imagePath, imageBuffer);

    const [rows, fields] = await db.query(
      'INSERT INTO products (serial_number, product_name, description, manufacturer_id, production_date, status, image_path) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [serial_number, product_name, description, manufacturer_id, production_date, status, imagePath]
    );

    console.log('Product created with image path:', imagePath);
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getProductBySN = async (req, res) => {
  // Lógica para obtener un producto por su ID de la base de datos
  const serial_number = req.params.serial_number;
  try {
    const [rows, fields] = await db.query('SELECT * FROM products WHERE serial_number = ?', [serial_number]);
    if(rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getProductsFromCompanyId = async (req, res) => {
 // Lógica para obtener los productos de una compañía
  const company_id = req.params.company_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM products WHERE manufacturer_id = ?', [company_id]);
    if(rows.length === 0) {
      return res.status(404).json({ message: 'Products not found' });
    }
    res.status(201).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateProduct = async (req, res) => {
  // Lógica para actualizar un producto en la base de datos
  const { product_name, description, status } = req.body;
  const serial_number = req.params.serial_number;
  try {
    const [rows, fields] = await db.query('SELECT * FROM products WHERE serial_number = ?', [serial_number]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await db.query('UPDATE products SET product_name = ?, description = ?, status = ? WHERE serial_number = ?', 
    [product_name, description, status, serial_number]);
    
    res.status(201).json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteProduct = async (req, res) => {
  // Lógica para eliminar un producto de la base de datos
  const serial_number = req.params.serial_number;
  try {
    const [rows, fields] = await db.query('SELECT * FROM products WHERE serial_number = ?', [serial_number]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await db.query('DELETE FROM products WHERE serial_number = ?', [serial_number]);
    res.status(201).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductsFromCompanyId,
  getProductBySN,
  updateProduct,
  deleteProduct
};
