const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 3000;
const game1 = require('./routes/game1');
const game2 = require('./routes/game2');

mongoose.connect('mongodb+srv://eduardodiamar:monlau@cluster0.lk08wmr.mongodb.net/appGames', {
    useNewUrlParser: true,
  useUnifiedTopology: true,

});

// Obtener la conexión y manejar errores
const db = mongoose.connection;
// Si ocurre un error, lo mostramos en la consola
db.on('error', console.error.bind(console, 'Connection error:'));
// Cuando se establece la conexión correctamente, mostramos un mensaje en la consola
db.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const app = express();

app.use(express.json());
app.use(cors());

app.use('/rpsls', game1);
app.use('/tamagotchi', game2);

app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);
});
