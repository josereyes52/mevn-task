const express = require("express");
const morgan = require("morgan");
const mongose = require("mongoose");

const app = express();
const uri = 'mongodb+srv://root:Admin@task-app.mbfb4.mongodb.net/Task?retryWrites=true&w=majority&ssl=true';

mongose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(connect => console.log('connected to mongodb..'))
    .catch(e => console.log('could not connect to mongodb', e));

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
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port", app.get('port'));
});