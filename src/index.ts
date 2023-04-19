import dotenv from "dotenv";
dotenv.config();

import app from "./server";
import { environment } from "./configuration/environment";


app.listen(environment.PORT, () =>
  console.log(
    `Servidor corriendo en el puerto http://localhost:${environment.PORT}`
  )
);