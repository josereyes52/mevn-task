const express = require("express");
const morgan = require("morgan");
const mongose = require("mongoose");

const app = express();
mongose.connect("mongodb://localhost/mevn-database")
    .then(() => console.log("Connected to MongoDB..."))
    .catch(err => console.error("Could not connect to MongoDB...", err));
// Settings
app.set('port', 3000);

// Middleware
// morgan es un middleware que nos permite ver las peticiones que se hacen a la API
app.use(morgan('dev'));

// express.json() es un middleware que nos permite recibir los datos en formato JSON
app.use(express.json());

// Routes
app.use('/tasks', require('./routes/task'));

// Static files
app.use(express.static(__dirname + '/public'));

// Server is listening on port 3000
app.listen(app.get('port'), () => {
    console.log("Server is running on port", app.get('port'));
});