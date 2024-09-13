require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const inventoryRoutes = require('./routes/inventoryRouter');
const morgan = require('morgan');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// MongoDB connection
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

connectToMongoDB();

// Routes
app.use('/inventory', inventoryRoutes); // Ensure the router is linked here

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


app.get('/test-server', (req, res) => {
    console.log('Server root route hit');
    res.send('Server test route working');
});
