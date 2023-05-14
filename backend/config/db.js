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

const allowedOrigins = ['http://localhost:3000','http://127.0.0.1:5173'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

pp.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });


module.exports = app;