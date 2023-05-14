const express = require('express');
const router = express.Router();
const game1Controller = require('../controller/game1');

router.get('/', game1Controller.obtenerPartidas);


router.post('/', game1Controller.crearPartida);



module.exports = router;