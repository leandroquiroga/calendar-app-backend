const { Schema, model} = require('mongoose');


const UsersSchema = Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

UsersSchema.method('toJSON', function () { 
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
})

module.exports = model('Users', UsersSchema);