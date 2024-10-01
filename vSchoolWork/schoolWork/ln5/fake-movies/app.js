const express = require("express");
const app = express();
const morgan = require('morgan')
require('dotenv').config()
const mongoose = require('mongoose')

//Middleware (for every request)
app.use(express.json()) //Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev'))

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

connectToMongoDB();

//Routes
app.use("/movies", require("./routes/movieRouter"));
app.use("/tvShows", require("./routes/tvShowRouter"));
app.use("/directors", require("./routes/directorRouter"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

app.listen(3000, () => {
    console.log('The server is running on Port 3000');
});
