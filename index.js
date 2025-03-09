const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const uuidv4 = require('uuid').v4;
app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    const task = { id: uuidv4(), title, description };
    tasks.push(task);
    res.status(201).json(task);
});

app.get('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const task = tasks.find((task) => task.id === id);
    if (task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const task = tasks.find((task) => task.id === id);
    if (task) {
        task.title = title;
        task.description = description;
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        res.status(204).json({ message: 'Task deleted' });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});