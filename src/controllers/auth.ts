import { Request as ExpressRequest, Response } from "express";
import bcrypjs from 'bcryptjs';
import Users from '../models/Users';
import { generateJWT } from '../helpers/jwt';

// Realizamos una extencion de la interface de express para 
// agregar las propiedades uid, name 
interface Request extends ExpressRequest {
  uid?: string;
  name?: string;
};

// Renovacion de tokens
export const renewToken = async (req: Request, res: Response) => {
  try {
    const { uid, name } = req;
    // Generar un nuevo token
    const token = await generateJWT(uid, name);
    res.json({
      ok: true,
      uid,
      name,
      token,
    });    
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({
      message: 'Hubo un error al renovar el token, por favor intente nuevamente',
      ok: false,
      error
    })
  }

};

// Logeo de usuario
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Busqueda del email en la base de datos
    let user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "Lo sentimos, no encontramos su email en nuestra base de datos",
      });
    }
    // Confirmar contraseñas
    const validPassword = bcrypjs.compareSync(password, user.password);

    // Si la contraseña no es valida con el usuario, retorna un estado 400
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "La contraseña no es valida",
      });
    }
    // Generar JSON Web Token
    const token = await generateJWT(user.id, user.name);
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Ups! Ha sucedido un error por favor contactece con administrador",
    });
  }
};
// Registro de usuario
export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Busqueda del email en la base de datos
    let user = await Users.findOne({ email });

    // Si existe el user retorna un status 400
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "Ya existe un usuario con ese correo.",
      });
    }

    // Sino realiza una instacia al modelo Users para guardarlo en la base de datos
    user = new Users(req.body);

    // Encriptado de contraseña
    const salt = bcrypjs.genSaltSync();
    user.password = bcrypjs.hashSync(password, salt);
    await user.save();
    // Generar JSON Web Token
    const token = await generateJWT(user.id, user.name);
    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Ups! Ha sucedido un error por favor contactece con administrador",
    });
  }
};
