// api/controllers/productController.js
// Controlador para manejar las peticiones de productos

const getAllProducts = async (req, res) => {
  // Lógica para obtener todos los productos de la base de datos
  try {
    const [rows, fields] = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const createProduct = async (req, res) => {
  // Lógica para crear un nuevo producto en la base de datos
  const { product_id, product_name, description, manufacturer_id, production_date, status } = req.body;
  try {
    const [rows, fields] = await db.query('INSERT INTO products (product_id, product_name, description, manufacturer_id, production_date, status) VALUES (?, ?, ?, ?, ?, ?)', 
    [product_id, product_name, description, manufacturer_id, production_date, status]);

    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getProductById = async (req, res) => {
  // Lógica para obtener un producto por su ID de la base de datos
  const product_id = req.params.product_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM products WHERE product_id = ?', [product_id]);
    if(rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateProduct = async (req, res) => {
  // Lógica para actualizar un producto en la base de datos
  const { product_name, description, manufacturer_id, production_date, status } = req.body;
  const product_id = req.params.product_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM products WHERE product_id = ?', [product_id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await db.query('UPDATE products SET product_name = ?, description = ?, manufacturer_id = ?, production_date = ?, status = ? WHERE product_id = ?', 
    [product_name, description, manufacturer_id, production_date, status, product_id]);
    
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteProduct = async (req, res) => {
  // Lógica para eliminar un producto de la base de datos
  const product_id = req.params.product_id;
  try {
    const [rows, fields] = await db.query('SELECT * FROM products WHERE product_id = ?', [product_id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await db.query('DELETE FROM products WHERE product_id = ?', [product_id]);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
};