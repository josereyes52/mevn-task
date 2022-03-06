const express = require("express");
const router = express.Router();

// Import the model (task.js) to use its database functions.
const Task = require("../models/Task");

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Create a new task and save it to the database
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task({
        title,
        description
    });
    await newTask.save();
    res.json({
        status: "Task saved"
    });
});

// Update a task by its ID and save it to the database
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    await Task.findByIdAndUpdate(req.params.id, {
        title,
        description
    });
    res.json({
        status: "Task updated"
    });
});

// Delete a task by its ID
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        status: "Task deleted"
    });
});

module.exports = router;
