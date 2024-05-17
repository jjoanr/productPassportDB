CREATE DATABASE IF NOT EXISTS digitalProductPassport;

USE digitalProductPassport;

-- Eliminar usuario si existe --
DROP USER IF EXISTS 'dpp'@'%';

-- Crear usuario administrador --
CREATE USER 'dpp'@'%' IDENTIFIED BY 'dpp123';
GRANT ALL PRIVILEGES ON digitalProductPassport.* TO 'dpp'@'%';

-- Crear tabla usuarios --
CREATE TABLE IF NOT EXISTS user_accounts (
  user_id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único
  username VARCHAR(255) NOT NULL UNIQUE, -- Username para login
  password VARCHAR(255) NOT NULL, -- Password para login
  email VARCHAR(255) -- Email del usuario
);

-- Crear tabla compañias --
CREATE TABLE IF NOT EXISTS companies (
    company_id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único
    company_code VARCHAR(20) NOT NULL UNIQUE, -- Código alfanumérico empresa
    company_name VARCHAR(255) NOT NULL, -- Nombre de la compañía
    address VARCHAR(255), -- Dirección de la empresa
    phone_number VARCHAR(20), -- Número de teléfono de la empresa
    email VARCHAR(255) -- Email de la empresa
);

-- Crear tabla cuentas de empleados --
CREATE TABLE IF NOT EXISTS employee_accounts (
  employee_id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único
  employee_code VARCHAR(20) NOT NULL UNIQUE, -- Código de empleado
  company_id INT, -- Empresa a la que pertenece el empleado
  password VARCHAR(255) NOT NULL, -- Password para login
  FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

-- Crear tabla productos --
CREATE TABLE IF NOT EXISTS products (
  product_id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único
  serial_number VARCHAR(50) NOT NULL UNIQUE, -- Número de serie del producto
  product_name VARCHAR(255) NOT NULL, -- Nombre del producto
  description TEXT NOT NULL, -- Descripción del producto
  manufacturer_id INT, -- Empresa que ha fabricado el producto
  production_date DATE NOT NULL, -- Fecha de produción
  status ENUM('in_stock', 'in_use', 'in_repair', 'damaged', 'recycled', 'in_transit', 'discontinued', 'unserviceable') DEFAULT 'in_stock', -- Estado del producto
  image_path VARCHAR(255), -- Path de la imagen del producto
  FOREIGN KEY (manufacturer_id) REFERENCES companies(company_id)
);

-- Crear tabla movimientos de productos --
CREATE TABLE IF NOT EXISTS movements (
  movement_id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único
  movement_code VARCHAR(20) NOT NULL UNIQUE, -- Código del movimiento
  product_id INT, -- Producto sobre el que se aplcia el movimiento
  employee_id INT, -- Empleado que registra el movimiento
  movement_type ENUM('sale', 'repair', 'return', 'refurbishment', 'maintenance') NOT NULL, -- Tipo de movimiento
  movement_date DATE, -- Fecha del movimiento
  description TEXT, -- Descripción del movimiento
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  FOREIGN KEY (employee_id) REFERENCES employee_accounts(employee_id)
);

-- Insert sample data into user_accounts table --
INSERT INTO user_accounts (username, password, email) VALUES
('user1', 'password11', 'user1@example.com'),
('user2', 'password22', 'user2@example.com');

-- Insert sample data into companies table --
INSERT INTO companies (company_code, company_name, address, phone_number, email) VALUES
('ABC123', 'Company ABC', '123 Main St, City, Country', '+1234567890', 'info@companyabc.com'),
('XYZ456', 'Company XYZ', '456 Elm St, City, Country', '+0987654321', 'info@companyxyz.com');

-- Insert sample data into employee_accounts table --
INSERT INTO employee_accounts (employee_code, company_id, password) VALUES
('EMP001', 1, 'emp001pass'),
('EMP002', 2, 'emp002pass');

-- Insert sample data into products table --
INSERT INTO products (serial_number, product_name, description, manufacturer_id, production_date, status) VALUES
('SN001', 'Product 1', 'Description of Product 1', 1, '2022-01-01', 'in_stock'),
('SN002', 'Product 2', 'Description of Product 2', 2, '2022-02-01', 'in_use'),
('SN003', 'Product 3', 'Description of Product 3', 2, '2022-05-02', 'in_transit');

-- Insert sample data into movements table --
INSERT INTO movements (movement_code, product_id, employee_id, movement_type, movement_date, description) VALUES
('MOV001', 1, 1, 'sale', '2022-03-01', 'Sale of Product 1'),
('MOV002', 2, 2, 'return', '2022-04-01', 'Return of Product 2'),
('MOV003', 2, 2, 'maintenance', '2022-04-10', 'Monthly maintenance');
