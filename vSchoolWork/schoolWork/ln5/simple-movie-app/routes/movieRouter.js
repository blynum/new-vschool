const express = require('express');
const movieRouter = express.Router();
const Movie = require('../models/Movie');

// GET all movies
movieRouter.get('/', async (req, res, next) => {
    try {
        const movies = await Movie.find(); // Fetch all movies
        res.json(movies);
    } catch (err) {
        next(err);
    }
});

// POST a new movie
movieRouter.post('/', async (req, res, next) => {
    const newMovie = new Movie(req.body); // Create a new movie instance
    try {
        const savedMovie = await newMovie.save(); // Save to the database
        res.status(201).json(savedMovie);
    } catch (err) {
        next(err);
    }
});

// PUT (update) a movie by ID
movieRouter.put('/:movieId', async (req, res, next) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.movieId, req.body, { new: true });
        res.json(updatedMovie);
    } catch (err) {
        next(err);
    }
});

// DELETE a movie by ID
movieRouter.delete('/:movieId', async (req, res, next) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.movieId);
        res.json(deletedMovie);
    } catch (err) {
        next(err);
    }
});

module.exports = movieRouter;
