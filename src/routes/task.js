const express = require("express");
const router = express.Router();

// Import the model (task.js) to use its database functions.
const Task = require("../models/Task");

router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post("/", async (req, res) => {
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

module.exports = router;
