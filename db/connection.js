// db/connection.js

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'db',
  user: 'dpp',
  password: 'dpp123',
  database: 'digitalProductPassport'
});

module.exports = pool;