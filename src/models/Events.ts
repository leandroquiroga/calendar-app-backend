import { Schema, model } from 'mongoose';
import { EventModels } from '../interfaces';

const EventsSchema = new Schema<EventModels>({
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
});

EventsSchema.method('toJSON', function () {
  // Extraemos toda la informacion del objeto de nuestra base de datos,
  // se modifica el nombre _id por id. 
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
export default model('Events', EventsSchema);