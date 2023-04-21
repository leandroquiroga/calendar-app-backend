import jwt from 'jsonwebtoken';
import { environment } from '../configuration/environment';

export const generateJWT = (uid?: string, name?: string) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    // Registramos la firma del JWT; 
    jwt.sign(payload, environment.SECRET_JWT_SEED, {
      expiresIn: '2h',
    },(err, token) => {
      if (err) {
        console.log(err);
        reject('No se pudo generar el token');
      };
      resolve(token);
    });
  });
};
