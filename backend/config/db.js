const mongoose = require('mongoose');
// Conectar a la base de datos usando mongoose
mongoose.connect('mongodb://localhost/my-database', {
 useNewUrlParser: true, // Estos parámetros son recomendados pormongoose
 useUnifiedTopology: true,
 useCreateIndex: true,
 useFindAndModify: false,
});
// Obtener la conexión y manejar errores
const db = mongoose.connection;
// Si ocurre un error, lo mostramos en la consola
db.on('error', console.error.bind(console, 'Connection error:'));
// Cuando se establece la conexión correctamente, mostramos un mensaje en la consola
db.once('open', () => {
 console.log('MongoDB database connection established successfully');
});