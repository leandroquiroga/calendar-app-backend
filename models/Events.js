const { Schema, model } = require('mongoose');

const EventsSchema = Schema({
  title: {
    type: String,
    require: true
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    require: true
  },
  end: {
    type: Date,
    require: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
});

module.exports = model('Events', EventsSchema);