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

//Get One
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

// Get by genre
movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})

// Post One
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuid()
    movies.push(newMovie)
    res / send('Successfully added $[newMovie title} to the database!')
})

//Delete One
movieRouter.delete('/:movieID', (req, res) => {
    const movieId = req.params.movieId;
    const movieIndex = movies.findIndex(movie => movie._id === movieId);
    movies.splice(movieIndex, 1);
    res.send('Successfully deleted movie!');
})

movieRouter.delete('/:movieId', async (req, res, next) => {
    try {
        const movieId = req.params.movieId;
        const deletedMoive = await Movie.findByIdandUpdate(movieId)
        return res.status(200).send('You have successfully deleted ${deletedMovie.title}')
    } catch (error) {
        res.status(500)
        return next(err)
    };
});

/* movieRouter.delete('/movies/:movieId', (req, res, next) => {
    const movieId = req.params.movieId;
    const movieIndex = movies.findIndex(movie => movie._id === movieId);
    movies.splice(movieIndex, 1);
    res.send('Successfully deleted movie!');
}); */

// Update One
movieRouter.put("/:movieId", async (req, res, next) => {
    try {
        const movieId = req.params.movieId
        const updatedMovie = await Movie.findByIdAndUpdate(
            movieId,
            req.body,
            { new: true } //telling db we want the newest version back
        )
        return res.status(201).send(updatedMovie)
    } catch (error) {
        res.status(500)
        return next(err)

    }

})

module.exports = movieRouter