const express = require('express');
const router = express.Router();
const InventoryModel = require('../models/inventory'); // Adjust the path if necessary

router.get('/test', (req, res) => {
    console.log('Test route hit');
    res.send('Test route working');
});


// GET all items

/* router.get('/', async (req, res) => {
    try {
        const items = await InventoryModel.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
}); */

// GET single item by ID
router.get('/:id', async (req, res) => {
    try {
        const item = await InventoryModel.findById(req.params.id);
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// GET all items or filtered by query parameters
router.get('/', async (req, res, next) => {
    console.log('Inventory route hit'); // Log when route is hit

    try {
        const { minPrice, maxPrice } = req.query;
        let filter = {};

        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        // Log the filter object being applied
        console.log('Filter being applied:', filter);

        const items = await InventoryModel.find(filter);
        return res.status(200).json(items);
    } catch (err) {
        console.error('Error occurred while fetching inventory:', err);
        return res.status(500).json({ error: 'Server error occurred' });
    }
});



// POST new item
router.post('/', async (req, res) => {
    try {
        const newItem = new InventoryModel(req.body);
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.status(400).json({ error: 'Error adding item' });
    }
});

// PUT (Update) item
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await InventoryModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ error: 'Item not found' });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: 'Error updating item' });
    }
});

// DELETE item
router.delete('/:id', async (req, res) => {
    try {
        const deletedItem = await InventoryModel.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ error: 'Item not found' });
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;