// api/server.js

// Iniciar el servidor y definir las rutas

const express = require('express');
const cors = require('cors');
// const rateLimit = require('express-rate-limit');
const app = express();
const PORT = process.env.PORT || 8080;

/*
//Rate limiter, max 100 requests per minute
const limiter = rateLimit ({
  windowMs: 60*1000,
  max: 100,
});
*/

//app.use(limiter);

//Habilitar CORS
app.use(cors());

// Procesar JSONs
app.use(express.json());

//////////////////////////
// DEFINICION DE RUTAS  //
//////////////////////////

// Rutas para productos
const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);

// Rutas para cuentas de usuarios
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Rutas para movimientos
const movementRoutes = require('./routes/movementRoutes');
app.use('/movements', movementRoutes);

// Rutas para compañias - empresas
const companyRoutes = require('./routes/companyRoutes');
app.use('/companies', companyRoutes);

// Rutas para cuentas de empleados
const employeeRoutes = require('./routes/employeeRoutes');
app.use('/employees', employeeRoutes);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
