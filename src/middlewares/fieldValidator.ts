import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator'


export const fieldValidator = (req: Request, res: Response, next: NextFunction) => {

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