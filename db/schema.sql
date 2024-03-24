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
  FOREIGN KEY (manufacturer_id) REFERENCES companies(company_id) ON DELETE CASCADE ON UPDATE CASCADE
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