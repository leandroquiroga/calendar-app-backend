import { Router } from 'express';
import { check } from 'express-validator';
import { validatorJWT } from '../middlewares/validatorJWT';
import { fieldValidator } from '../middlewares/fieldValidator';
import { isDate } from '../helpers/isDate';
import { createEvents, deleteEvents, getEvents, updateEvents } from '../controllers/events';

const router = Router();

// Todas las rutas deben validar el token
router.use(validatorJWT);

// Obtiene los eventos
router.get('/', getEvents);
// Crea los eventos
router.post(
  '/',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio debe ser obligatoria').custom(isDate),
    check('end', 'La fecha de finalizacion debe ser obligatoria').custom(isDate),
    fieldValidator,
  ],
  createEvents);
// Actualiza los eventos
router.put(
  '/:id',
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'La fecha de inicio debe ser obligatoria').custom(isDate),
    check('end', 'La fecha de finalizacion debe ser obligatoria').custom(isDate),
    fieldValidator,
  ],
  updateEvents);
// Elimina los eventos
router.delete('/:id', deleteEvents);

export default router;
