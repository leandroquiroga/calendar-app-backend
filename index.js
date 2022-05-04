const express = require('express');
const dotenv = require('dotenv');
const routeAuth = require('./routes/auth')
dotenv.config();



const port = process.env.PORT;


// Crear el servidor de express
const app = express();

// Middelware --> Es una funcion que se ejecuta cuando se hace una peticion
//                al servidor.

app.use(express.static('public'));

// Parseo del body
app.use(express.json());

//Rutas
app.use('/auth', routeAuth );

// Escucha peticiones
app.listen(port , () => console.log(`Servidor corriendo en el puerto http://localhost:${port}`));