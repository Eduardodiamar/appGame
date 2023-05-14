const mongoose = require('mongoose');

const partidaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    default: Date.now
  },
  jugador: {
    type: String,
    required: true
  },
  resultado: {
    type: String,
    enum: [1, 2, 3], // 1 == player wins, 2 == pc wins, 3 == draw
    required: true
  }
},{
  versionKey: false
});

const Partida = mongoose.model('rpsls', partidaSchema);

module.exports = Partida;