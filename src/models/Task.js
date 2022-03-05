const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create a schema
const Task = new Schema({
    title: String,
    description: String
});

// Create a model based on the schema and export it
module.exports = mongoose.model('Task', Task);