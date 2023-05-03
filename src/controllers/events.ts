import { Request as ExpressRequest, Response } from "express";
import Events from '../models/Events';

// Realizamos una extencion de la interface de express para 
// agregar las propiedades uid, name 
interface Request extends ExpressRequest {
  uid?: string;
  name?: string;
};

export const getEvents = async (_req: Request, res: Response) => {
  const events = await Events.find().populate('user', 'name');
  // Cheaquear si hay eventos
  (events.length > 0)
    ? res.status(200).json({
      ok: true,
      event: events,
    })
    : res.status(404).json({
      ok: false,
      msg: 'No hay eventos disponibles'
  });
};
export const createEvents =  async (req: Request, res: Response) => {

  const event = new Events(req.body);
  try {
    event.user = req.uid as string;
    const saveEvent = await event.save();
    console.log(saveEvent)
    res.status(200).json({
      ok: true,
      event: saveEvent
    });
  } catch (error) {
    // console.log(error)
    return res.status(500).json({
      ok: false,
      msg: 'Hubo un error, por favor intente nuevamente',
    });
  };
};

export const updateEvents = async (req: Request, res: Response) => {
  const { id } = req.params;
  const uid = req.uid;

  try {
    const event = await Events.findById(id);
    // Verificar si el evento existe
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'El evento solicitado no existe'
      });
    };
    // Verificar que si el usuario es correcto
    if (event.user.toString() !== uid) { 
      return res.status(401).json({
        ok: false,
        msg: 'No tiene los privilegios para realizar esta accion'
      }); 
    };
    // Actualiza el evento
    const newEvent = {
      ...req.body,
      user: uid
    };

    const updatedEvent = await Events.findOneAndUpdate({ id }, newEvent, {new: true});
    res.status(200).json({
      ok: true,
      evento: updatedEvent
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Ups hubo un error, comuniquese con el administrador'
    });
  };
};

export const deleteEvents = async (req: Request, res: Response) => {
  const { id } = req.params;
  const uid = req.uid;

  console.log(uid)

  try {
    const event = await Events.findById(id);
    // Verificamos que el elemento exista
    if (!event) { 
      return res.status(404).json({
        ok: false,
        msg: 'El evento que desea eliminar no existe'
      });
    };

    // Verificar que exista el usuario
    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene los privilegios para realizar esta accion'
      });
    };

    // Eliminamos el elemento
    await Events.findByIdAndRemove(id);
    res.status(200).json({
      ok: true,
      msg: 'Evento elminado'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Ups hubo un error, comuniquese con el administrador'
    });
  };
};

