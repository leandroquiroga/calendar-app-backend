import express from "express";
import routeAuth from "../routes/auth";
import routeEvents from "../routes/events";
import { dbConecting } from "../database/configDB";
import cors from "cors";

const port = process.env.PORT || 3000;
// Crear el servidor de express
const app = express();

app.use(cors());
// Bases de datos
dbConecting();

app.use(express.static("public"));

// Parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", routeAuth);
app.use("/api/events", routeEvents);


export default app