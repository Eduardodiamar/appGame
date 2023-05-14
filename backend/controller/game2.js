const Tamagotchi = require("../models/game2");


exports.getTamagotchi = async (req, res) => {
  try {
    const tamagotchi = await Tamagotchi.find()
    res.json(tamagotchi)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

  exports.createTamagotchi = async (req, res) => {
    try {
      const tamagotchi = new Tamagotchi(req.body)
      console.log(tamagotchi);
      console.log(req.body);
      await tamagotchi.save()
      res.status(201).json(tamagotchi)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

