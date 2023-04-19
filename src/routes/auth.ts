/*  Rutas de usuarios --> port + /auth */
import { Router } from 'express';
import {check } from 'express-validator';
import { renewToken, loginUser, registerUser } from '../controllers/auth';
import { validatorJWT } from '../middlewares/validatorJWT';
import { fieldValidator } from './../middlewares/fieldValidator';
const router = Router();

// Revalida el JSON Web Token
router.get(
  '/renew',
  validatorJWT,
  renewToken
);
// Pagina de registro de const {request} = require('express')
router.post(
  '/register',
  // Como se utiliza varios middlewares utilizamos corchetes
  [check('name', 'Debe colocar un nombre de usuario').not().isEmpty().isString()],
  [check('email', 'Email no valido').isEmail()],
  [check('password', 'La contraseña debe tener un minimo de 6 caracteres').isLength({ min: 6 })],
  fieldValidator,
  registerUser
);
//pagina de login de usuario
router.post(
  '/login',
  [check('email', 'Email no valido').isEmail()],
  [check('password', 'La contraseña no es valida').isLength({ min: 6 })],
  fieldValidator,
  loginUser
);

export default router;