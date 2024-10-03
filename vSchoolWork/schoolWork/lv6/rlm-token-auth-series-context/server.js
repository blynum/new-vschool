const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const { expressjwt } = require('express-jwt')


//Middleware
app.use(express.json());
app.use(morgan('dev'));

// Connect to MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
};

connectToMongoDB();


//Routes
app.use('/todo', require('./routes/todoRouter.js'))
app.use('/api/auth', require('./routes/authRouter.js'))
app.use('/api/main', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))//don't want users to create issues if they're not logged in
app.use('/api/main/issues', require('./routes/issueRouter.js'))




//Error handler middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ errorMessage: err.message });
});



// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
