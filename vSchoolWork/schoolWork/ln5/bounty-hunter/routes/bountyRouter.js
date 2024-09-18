const express = require('express');
const router = express.Router();
const BountyModel = require('../models/bountyModel'); // Import Mongoose model

// This route will retrieve all bounties
router.get('/', async (req, res) => {
    try {
        const bounties = await BountyModel.find(); // Fetch all bounties from MongoDB
        res.status(200).json(bounties);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving bounties", error });
    }
});

// This route will add a new bounty
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, living, bountyAmount, type } = req.body;
        const newBounty = new BountyModel({ firstName, lastName, living, bountyAmount, type });

        const savedBounty = await newBounty.save(); // Save to MongoDB
        res.status(201).json(savedBounty); // Return the newly created bounty
    } catch (error) {
        res.status(500).json({ message: "Error saving the bounty", error });
    }
});

// This route will delete a bounty
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBounty = await BountyModel.findByIdAndDelete(id); // Delete bounty by ID

        if (!deletedBounty) {
            return res.status(404).json({ message: `Bounty with id ${id} not found.` });
        }

        res.status(200).json({ message: `Bounty with id ${id} has been deleted.` });
    } catch (error) {
        res.status(500).json({ message: "Error deleting the bounty", error });
    }
});

// This route will update a bounty
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBounty = await BountyModel.findByIdAndUpdate(id, req.body, { new: true }); // Update bounty by ID and return new document

        if (!updatedBounty) {
            return res.status(404).json({ message: `Bounty with id ${id} not found.` });
        }

        res.status(200).json(updatedBounty);
    } catch (error) {
        res.status(500).json({ message: "Error updating the bounty", error });
    }
});

module.exports = router;
