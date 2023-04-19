import moment from 'moment';

export const isDate = (value: any) => {
  // Si el value no existe retorna true
  if (!value) return false
  // En caso que exista chequea que la fecha sea valida.
  const date = moment(value);
  if (date.isValid()) {
    return true
  };
  return false
};