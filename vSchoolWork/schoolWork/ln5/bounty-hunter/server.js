const express = require('express');

const cors = require('cors');
const bounties = require('./bountyData'); // Make sure you're importing the data correctly
const mongoose = require('mongoose');
const cors = require('cors');
const Bounty = require('./models/bountyModel'); // Import the Bounty model

const app = express();


app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS

//Connect to MongoDB (if not already done in another file)
mongoose.connect('mongodb://localhost:27017/bountyDB', { useNewUrlParser: true, useUnifiedTopology: true });



//Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

