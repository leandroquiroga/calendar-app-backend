import { Schema, model} from 'mongoose';
import { UserModels } from "../interfaces";

const UsersSchema = new Schema<UserModels>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UsersSchema.method('toJSON', function () { 
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
})

export default model('Users', UsersSchema);