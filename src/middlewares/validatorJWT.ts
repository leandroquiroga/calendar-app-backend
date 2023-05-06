import { Request as ExpressRequest, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { environment } from "../configuration/environment";
import { JWTPayload } from "../interfaces";

// Realizamos una extencion de la interface de express para 
// agregar las propiedades uid, name 
interface Request extends ExpressRequest {
  uid?: string;
  name?: string;
};

export const validatorJWT = (req: Request, res: Response, next: NextFunction) => {
  
  try {
    // x-token headers
    const token = req.headers["authorization"];
    // Verifica que si no exite el token
    if (token) {
      // Extraemos la informacion del usuario verificando su JWT
      const decode = jwt.verify(
        token,
        environment.SECRET_JWT_SEED
      ) as JWTPayload;
      const { name, uid } = decode;

      // Modificamos la request para pasarla por referencia a traves del next
      req.uid = uid;
      req.name = name;
    };

    next();
  } catch (error: any) {
    console.log(error)
    next()
  }
};