const express = require('express');
const dotenv = require('dotenv');
const routeAuth = require('./routes/auth');
const routeEvents = require('./routes/events');
const { dbConecting } = require('./database/configDB');
const cors = require('cors');
dotenv.config();

const port = process.env.PORT || 3000;
// Crear el servidor de express
const app = express();

app.use(cors());
// Bases de datos
dbConecting();

app.use(express.static('public'));

// Parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', routeAuth);
app.use('/api/events', routeEvents);

// Escucha peticiones
app.listen(port , () => console.log(`Servidor corriendo en el puerto http://localhost:${port}`));