CREATE DATABASE IF NOT EXISTS digitalProductPassport;

USE digitalProductPassport;

-- Eliminar usuario si existe --
DROP USER IF EXISTS 'dpp'@'%';

-- Crear usuario administrador --
CREATE USER 'dpp'@'%' IDENTIFIED BY 'dpp123';
GRANT ALL PRIVILEGES ON digitalProductPassport.* TO 'dpp'@'%';

-- Crear tabla usuarios --
CREATE TABLE IF NOT EXISTS user_accounts (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255)
);

-- Crear tabla compañias --
CREATE TABLE IF NOT EXISTS companies (
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    phone_number VARCHAR(20),
    email VARCHAR(255)
);

-- Crear tabla cuentas de empleados --
CREATE TABLE IF NOT EXISTS employee_accounts (
  employee_account_id INT AUTO_INCREMENT PRIMARY KEY,
  company_id INT,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

-- Crear tabla productos --
CREATE TABLE IF NOT EXISTS products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  manufacturer_id INT,
  production_date DATE NOT NULL,
  status ENUM('in_stock', 'in_use', 'in_repair', 'damaged', 'recycled', 'in_transit', 'discontinued', 'unserviceable') DEFAULT 'in_stock',
  FOREIGN KEY (manufacturer_id) REFERENCES companies(company_id)
);

-- Crear tabla movimientos de productos --
CREATE TABLE IF NOT EXISTS movements (
  movement_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  employee_account_id INT,
  movement_type ENUM('sale', 'repair', 'return', 'refurbishment', 'maintenance') NOT NULL,
  movement_date DATE,
  description TEXT,
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  FOREIGN KEY (employee_account_id) REFERENCES employee_accounts(employee_account_id)
);