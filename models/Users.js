const { Schema, model} = require('mongoose');


const UsersSchema = Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  }
});


module.exports = model('Users', UsersSchema);