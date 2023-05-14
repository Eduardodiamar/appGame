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
    enum: ['Ganó el jugador', 'Ganó la computadora', 'Empate'],
    required: true
  }
},{
  versionKey: false
});

const Partida = mongoose.model('s', partidaSchema);

module.exports = Partida;