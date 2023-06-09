const mongoose = require('mongoose');

const tamagotchiSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  nivelSalud: {
    type: Number,
    default: 100,
    min: 0,
    max: 100
  },
  nivelEnergia: {
    type: Number,
    default: 100,
    min: 0,
    max: 100
  },
  nivelFelicidad: {
    type: Number,
    default: 100,
    min: 0,
    max: 100
  },
  fechaNacimiento: {
    type: Date,
    required: true
  }
}, {
  versionKey: false,
})

const Tamagotchi = mongoose.model('Tamagotchi', tamagotchiSchema);

module.exports = Tamagotchi;