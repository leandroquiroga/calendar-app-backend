const {response} = require('express');
const { validationResult } = require('express-validator');


const fieldValidator = (req, res = response, next) => {

  const errors = validationResult(req.body);

  // Si hay errores retorna un objeto especificando el error 
  if (!errors.isEmpty()) { 
    console.log(errors);
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  };
  next();
};

module.exports = {
  fieldValidator,
}