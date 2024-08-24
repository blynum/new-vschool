const express = require('express');
const { v4: uuidv4 } = require('uuid');


const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

//The array for my temporary database
let bounties = [];


//This route will retrieve all bounties
app.get('/bounty', (req, res) => {
    res.json(bounties);
});

//This route will add a new bounty
app.post('/bounty', (req, res) => {
    const newBounty = {
        id: uuidv4(), // Assign a unique ID
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        living: req.body.living,
        bountyAmount: req.body.bountyAmount,
        type: req.body.type
    };
    bounties.push(newBounty);
    res.status(201).json(newBounty); // Return the newly created bounty
});


//Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

