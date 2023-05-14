const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://eduardodiamar:monlau@cluster0.lk08wmr.mongodb.net/appGames', {
 useNewUrlParser: true, 
 useUnifiedTopology: true,
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const app = express();

app.use(express.json());


pp.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });


module.exports = app;