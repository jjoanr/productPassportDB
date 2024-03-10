CREATE DATABASE IF NOT EXISTS digitalProductPassport;

USE digitalProductPassport;

-- Drop user if exists
DROP USER IF EXISTS 'dpp'@'%';

-- Crear usuario administrador --
CREATE USER 'dpp'@'%' IDENTIFIED BY 'dpp123';
GRANT ALL PRIVILEGES ON digitalProductPassport.* TO 'dpp'@'%';

-- Crear tabla usuarios --
CREATE TABLE IF NOT EXISTS user_accounts (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255)
);

-- Crear tabla compañias --
CREATE TABLE IF NOT EXISTS companies (
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    phone_number VARCHAR(20),
    email VARCHAR(255)
);

-- Crear tabla cuentas de empleados --
CREATE TABLE IF NOT EXISTS employee_accounts (
  employee_account_id INT AUTO_INCREMENT PRIMARY KEY,
  company_id INT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

-- Crear tabla productos --
CREATE TABLE IF NOT EXISTS products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  manufacturer_id INT,
  production_date DATE,
  status ENUM('In stock', 'Sold', 'In repair', 'Damaged', 'Reconditioned', 'Returned', 'Unusable') DEFAULT 'In stock',
  FOREIGN KEY (manufacturer_id) REFERENCES companies(company_id)
);

-- Crear tabla movimientos de productos --
CREATE TABLE IF NOT EXISTS movements (
  movement_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  movement_type ENUM('Sale', 'Repair', 'Return', 'Reconditioning') NOT NULL,
  movement_date DATE,
  description TEXT,
  result TEXT,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);