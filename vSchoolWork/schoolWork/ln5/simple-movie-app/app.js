const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config(); // To use the .env file

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(morgan('dev')); // Logging middleware

// MongoDB Connection
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
app.use('/movies', require('./routes/movieRouter'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
