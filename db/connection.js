// db/connection.js

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'dpp',
  password: 'dpp123', // Cambia esto por tu contraseña
  database: 'digitalProductPassport'
});

module.exports = pool;