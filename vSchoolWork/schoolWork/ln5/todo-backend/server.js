const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Get a single todo by _id
app.get('/todos/:id', (req, res) => {
    const todo = todos.find(todo => todo._id === req.params.id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).send('Todo not found');
    }
});

// Add a new todo
app.post('/todos', (req, res) => {
    const { name, description, imageUrl } = req.body;
    const newTodo = {
        name,
        description,
        imageUrl,
        completed: false,
        _id: uuidv4(),
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Update a todo by _id
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, imageUrl, completed } = req.body;
    const todoIndex = todos.findIndex(todo => todo._id === id);

    if (todoIndex !== -1) {
        todos[todoIndex] = {
            ...todos[todoIndex],
            name: name || todos[todoIndex].name,
            description: description || todos[todoIndex].description,
            imageUrl: imageUrl || todos[todoIndex].imageUrl,
            completed: completed !== undefined ? completed : todos[todoIndex].completed,
        };
        res.json(todos[todoIndex]);
    } else {
        res.status(404).send('Todo not found');
    }
});

// Delete a todo by _id
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex(todo => todo._id === id);

    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Todo not found');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
