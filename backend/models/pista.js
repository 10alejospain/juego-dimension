const mongoose = require('mongoose');

const { Schema } = mongoose;

const hintSchema = new Schema({
  qr: {
    type: String,
    required: [true, 'numero de qr'],
    unique: true,
  },
  secret: {
    type: String,
    required: [true, 'palabra secreta'],
    unique: true,
  },
});

module.exports = mongoose.model('Hint', hintSchema);