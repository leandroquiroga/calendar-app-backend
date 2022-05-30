const { response } = require('express');
const bcrypjs = require('bcryptjs');
const Users = require('../models/Users');
const { generateJWT } = require('../helpers/jwt');

// Renovacion de tokens
const renewToken = async (req, res = response) => {
  const { uid, name } = req;
  // Generar un nuevo token 
  const token = await generateJWT(uid, name);
  res.json({
    ok: true,
    uid,
    name,
    token
  });
};

// Logeo de usuario
const loginUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    // Busqueda del email en la base de datos
    let user = await Users.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'Lo sentimos, no encontramos su email en nuestra base de datos'
      });
    };
    // Confirmar contraseñas 
    const validPassword = bcrypjs.compareSync(password, user.password);

    // Si la contraseña no es valida con el usuario, retorna un estado 400
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'La contraseña no es valida'
      });
    };
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
      msg: 'Ups! Ha sucedido un error por favor contactece con administrador'
    });
  };
};
// Registro de usuario
const registerUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    // Busqueda del email en la base de datos
    let user = await Users.findOne({ email });
    
    // Si existe el user retorna un status 400
    if (user){
      return res.status(400).json({
        ok: false,
        msg: 'Ya existe un usuario con ese correo.'
      });
    };
    
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
      token
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Ups! Ha sucedido un error por favor contactece con administrador'
    });
  };
};

module.exports = {
  renewToken, 
  loginUser,
  registerUser,
}