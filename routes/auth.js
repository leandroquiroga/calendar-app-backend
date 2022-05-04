/* 
  Rutas de usuarios
  port + /auth
*/

const { Router } = require('express');
const { renewToken, loginUser, registerUser, registerGETUser } = require('../controllers/auth');
const router = Router();

// Revalida el codigo token
router.get('/renew', renewToken)

// Pagina de registro de usuario
router.post('/register', registerUser);

//pagina de login de usuario
router.post('/login', loginUser)

module.exports = router;