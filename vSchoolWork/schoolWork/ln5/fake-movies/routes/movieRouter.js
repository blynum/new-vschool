const express = require('express')
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

//Fake Movie Data
const movies = [
    { title: 'die hard', genre: 'action', _id: uuidv4() },
    { title: 'star wars IV', genre: 'fantasy', _id: uuidv4() },
    { title: 'lion king', genre: 'fantasy', _id: uuidv4() },
    { title: 'friday the 13th', genre: 'horror', _id: uuidv4() }
];

//Routes
/* movieRouter.get('/', (req, res) => {
    res.send(movies);
});

movieRouter.post('/', (req, res) => {
    const newMovie = req.body;
    newMovie._id = uuidv4()
    movies.push(newMovie);
    res.send(`Successfully added "${newMovie.title}" to the database`);
}); */

movieRouter.route("/")
    .get((req, res) => { // Remove '/' inside .get()
        res.send(movies);
    })
    .post((req, res) => { // Remove '/' inside .post()
        const newMovie = req.body;
        newMovie._id = uuidv4();
        movies.push(newMovie);
        res.send(`Successfully added "${newMovie.title}" to the database`);
    });




module.exports = movieRouter