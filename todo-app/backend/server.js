const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// This is our "database" for now - just a list in memory
let tasks = [];
let idCounter = 1;

// GET - fetch all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST - add a new task
app.post('/tasks', (req, res) => {
  const task = { id: idCounter++, title: req.body.title, done: false };
  tasks.push(task);
  res.json(task);
});

// PUT - mark task as done or edit it
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (task) {
    task.title = req.body.title || task.title;
    task.done = req.body.done ?? task.done;
  }
  res.json(task);
});

// DELETE - remove a task
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.json({ message: 'Deleted!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
