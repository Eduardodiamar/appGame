const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
mongoose.connect('mongodb+srv://eduardodiamar:monlau@cluster0.lk08wmr.mongodb.net/appgames', {
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

app.listen(port, () => {

    console.log(`Server running at http://localhost:${port}`);
});
