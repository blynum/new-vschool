// server.js
const express = require('express');
const app = express();
const myMiddleware = require('./myMiddleware');

// Use the middleware in your app
app.use(myMiddleware);

// Define a GET route
app.get('/data', (req, res) => {
    // Accessing the custom UUID added by the middleware
    res.json({
        message: "Hello, World!",
        customId: req.customId
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
