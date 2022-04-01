const express = require("express");
const router = express.Router();

// Import the model (task.js) to use its database functions.
const Task = require("../models/Task");

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    await Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(404).json({ success: false }));
});


// Create a new task and save it to the database
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task({
        title,
        description
    });
    await newTask.save()
        .then(task => res.json(task))
        .catch(err => res.status(500).json({ success: false }));
});

// Update a task by its ID and save it to the database
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    await Task.findByIdAndUpdate(req.params.id, {
        title,
        description
    })
        .then(task => res.json(task))
        .catch(err => res.status(500).json({ success: false }));
});

// Delete a task by its ID
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(500).json({ success: false }));
});

module.exports = router;
