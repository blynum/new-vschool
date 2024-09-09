const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');



const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Enable CORS


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


//This route will delete a bounty
app.delete('/bounty/:id', (req, res) => {
    const { id } = req.params;
    const index = bounties.findIndex(bounty => bounty.id === id);

    if (index !== -1) {
        bounties.splice(index, 1);
        res.status(200).json({ message: `Bounty with id ${id} has been deleted.` });
    } else {
        res.status(404).json({ message: `Bounty with id ${id} not found.` });
    }
});

//This route will update a bounty
app.put('/bounty/:id', (req, res) => {
    const { id } = req.params;
    const bountyIndex = bounties.findIndex(bounty => bounty.id === id);

    if (bountyIndex !== -1) {
        const updatedBounty = {
            ...bounties[bountyIndex],
            ...req.body // Use the spread operator to update only the fields provided in the request
        };
        bounties[bountyIndex] = updatedBounty;
        res.status(200).json(updatedBounty);
    } else {
        res.status(404).json({ message: `Bounty with id ${id} not found.` });
    }
});


//Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

