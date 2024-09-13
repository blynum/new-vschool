const express = require('express');
const movieRouter = express.Router();
const Movie = require('../models/Movie'); // Import the Mongoose Movie model

// GET all movies from MongoDB
movieRouter.get("/", async (req, res, next) => {
    try {
        const movies = await Movie.find(); // Fetch all movies from the MongoDB collection
        res.json(movies);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// GET one movie by ID from MongoDB
movieRouter.get("/:movieId", async (req, res, next) => {
    const movieId = req.params.movieId;
    try {
        const foundMovie = await Movie.findById(movieId); // Find a movie by its MongoDB _id
        if (!foundMovie) {
            return res.status(404).send("Movie not found");
        }
        res.json(foundMovie);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// GET movies by genre from MongoDB
movieRouter.get("/search/genre", async (req, res, next) => {
    const genre = req.query.genre;
    try {
        const filteredMovies = await Movie.find({ genre: genre }); // Search movies by genre
        res.json(filteredMovies);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// POST a new movie to MongoDB
movieRouter.post("/", async (req, res, next) => {
    const newMovie = new Movie(req.body); // Create a new instance of the Movie model
    try {
        const savedMovie = await newMovie.save(); // Save the movie to MongoDB
        res.status(201).json(savedMovie);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// DELETE a movie by ID from MongoDB
movieRouter.delete("/:movieId", async (req, res, next) => {
    const movieId = req.params.movieId;
    try {
        const deletedMovie = await Movie.findByIdAndDelete(movieId); // Find and delete movie by ID
        if (!deletedMovie) {
            return res.status(404).send("Movie not found");
        }
        res.send(`Successfully deleted "${deletedMovie.title}" from the database`);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

// PUT (update) a movie by ID in MongoDB
movieRouter.put("/:movieId", async (req, res, next) => {
    const movieId = req.params.movieId;
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            movieId,
            req.body, // Update the movie with the request body
            { new: true } // Return the updated movie
        );
        if (!updatedMovie) {
            return res.status(404).send("Movie not found");
        }
        res.json(updatedMovie);
    } catch (err) {
        res.status(500);
        return next(err);
    }
});

module.exports = movieRouter;
