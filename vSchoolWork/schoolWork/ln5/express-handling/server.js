const express = require("express");
const app = express();

// Simulating an asynchronous operation that returns a promise
const SomeAsyncOperation = () => new Promise((resolve, reject) => {
    // Simulate some async task with a 50% chance of success or failure
    setTimeout(() => {
        const success = Math.random() > 0.5;
        success ? resolve("Success!") : reject(new Error("Something went wrong"));
    }, 1000);
});

// Handling synchronous errors
app.get("/puppies", (req, res, next) => {
    if (req.query.someRequiredQuery === undefined) {
        throw new Error("You must include a query called `someRequiredQuery` in your request!");
    }
    res.send("Query received!");
});

// Handling asynchronous errors
app.post("/puppies", (req, res, next) => {
    SomeAsyncOperation()
        .then(response => {
            console.log("Everything worked out fine");
            res.send("Async operation successful!");
        })
        .catch(err => {
            next(err); // Pass the error to the error-handling middleware
        });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(500).send("There was an error");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
