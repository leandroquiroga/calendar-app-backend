const { response, request } = require("express");
const jwt = require('jsonwebtoken');

const validatorJWT = (req = request, res = response, next) => {
  // x-token headers
  const token = req.header('x-token');

  // Verifica que si no exite el token
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la peticion'
    });
  };

  try {
    // Extraemos la informacion del usuario verificando su JWT 
    const {uid, name} = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED,
    );

    // Modificamos la request para pasarla por referencia a traves del next
    req.uid = uid;
    req.name = name;
    
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no valido'
    });
  };
  next();
};
module.exports = {
  validatorJWT
}