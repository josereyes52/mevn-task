const express = require("express");
const morgan = require("morgan");
const mongose = require("mongoose");

const app = express();
mongose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:Admin@task-app.mbfb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true })
        .then(connect => console.log('connected to mongodb..'))
        .catch(e => console.log('could not connect to mongodb', e))

module.exports = {mongose}

// Settings
app.set('port', 3000);

// Middleware
// morgan es un middleware que nos permite ver las peticiones que se hacen a la API
app.use(morgan('dev'));

// express.json() es un middleware que nos permite recibir los datos en formato JSON
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task'));

// Static files
app.use(express.static(__dirname + '/public'));

// Server is listening on port 3000
app.listen(app.get('port'), () => {
    console.log("Server is running on port", app.get('port'));
});