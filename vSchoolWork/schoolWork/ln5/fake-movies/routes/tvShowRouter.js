const express = require('express')
const tvShowRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const tvShows = [
    { title: "Rick and Morty", _id: uuidv4() },
    { titel: "Watchman", _id: uuidv4() },
    { title: "Westworld", _id: uuidv4() },
    { title: "Friend", _id: uuidv4() }
]

/* tvShowRouter.get('/', (req, res) => {
    res.send(tvShows)
})

tvShowRouter.post('/', (req, res) => {
    const newShow = req.body;
    newShow._id = uuidv4()
    tvShows.push(newShow);
    res.send(`Successfully added "${newShow.title}" to the database`);
}); */

tvShowRouter.route("/")
    .get((req, res) => {
        res.send(tvShows)
    })
    .post((req, res) => {
        const newShow = req.body;
        newShow._id = uuidv4()
        tvShows.push(newShow);
        res.send(`Successfully added "${newShow.title}" to the database`)
    });



module.exports = tvShowRouter