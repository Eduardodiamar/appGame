const express = require('express');
const router = express.Router();
const game2 = require('../controller/game2');

// Obtener todas las mascotas
router.get('/', game2.getTamagotchi);

// Crear una nueva mascota
router.post('/', game2.createTamagotchi);



module.exports = router;