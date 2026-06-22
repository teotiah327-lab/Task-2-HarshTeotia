const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary in-memory storage
let tasks = [
    {
        id: 1,
        name: "Learn HTML"
    },
    {
        id: 2,
        name: "Build Task Manager"
    }
];

// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Task Manager API Running Successfully"
    });
});

// GET All Tasks
app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});

// GET Task By ID
app.get("/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.status(200).json(task);
});

// POST New Task
app.post("/tasks", (req, res) => {

    const { name } = req.body;

    if (!name || name.trim() === "") {
        return res.status(400).json({
            message: "Task name is required"
        });
    }

    const newTask = {
        id: Date.now(),
        name: name.trim()
    };

    tasks.push(newTask);

    res.status(201).json({
        message: "Task added successfully",
        task: newTask
    });
});

// DELETE Task
app.delete("/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const taskExists = tasks.some(
        task => task.id === id
    );

    if (!taskExists) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks = tasks.filter(
        task => task.id !== id
    );

    res.status(200).json({
        message: "Task deleted successfully"
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});