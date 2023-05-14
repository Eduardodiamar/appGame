const Partida = require("../models/game1");

exports.obtenerPartidas = async (req, res) => {
  try {
    const partidas = await Partida.find();
    res.json(partidas);
  } catch (error) {
    res.status(500).send("Hubo un error al obtener las partidas");
  }
};

exports.crearPartida = async (req, res) => {
  try {
    const partida = new Partida(req.body);
   
    await partida.save();
    res.json(partida);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};
