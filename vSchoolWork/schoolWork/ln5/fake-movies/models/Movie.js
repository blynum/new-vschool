const mongoose = require('mongoose');

// Define the schema for a movie
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // The movie must have a title
        unique: true,
    },
    genre: {
        type: String,
        required: true, // The movie must have a genre
    },
    releaseYear: {
        type: Number, // Optionally, you can include a release year for the movie
    },
    rating: {
        type: Number, // Optionally, include a rating for the movie
    },
    // Updated Author Property to hold the unique id for who created each movie.
    author: {
        type: Schema.Types.ObjectId, // mongoose schema syntax for database id
        ref: "Director" // mongoose referance to the Director Schema/Model
    }
});

// Create the model for movies using the schema
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
