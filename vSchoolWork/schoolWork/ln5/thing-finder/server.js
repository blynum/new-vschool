const express = require('express');
const app = express();
const port = 8000;

// Sample inventory items array
const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },
    {
        name: "pants",
        type: "clothing",
        price: 2500,
    },
    {
        name: "basket ball",
        type: "toy",
        price: 1000,
    },
    {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },
    {
        name: "shirt",
        type: "clothing",
        price: 800,
    },
    {
        name: "soup",
        type: "food",
        price: 300,
    },
    {
        name: "flour",
        type: "food",
        price: 100,
    }
];

// Consolidated GET route to return inventory items, with filtering by type, minPrice, and maxPrice
app.get('/inventory', (req, res) => {
    const { type, minPrice = 0, maxPrice = 1000000 } = req.query;

    // Convert minPrice and maxPrice to numbers
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    // Filter items based on type, minPrice, and maxPrice
    let filteredItems = inventoryItems.filter(item => {
        const price = item.price;
        return (!type || item.type === type) && (price >= min && price <= max);
    });

    res.json(filteredItems);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
