const express = require("express");
const app = express();
const morgan = require('morgan')

//Middleware (for every request)
app.use(express.json()) //Looks for a request body, and turns it into 'req.body'
app.use(morgan('dev'))



//Routes
app.use("/movies", require("./routes/movieRouter"))
app.use("/tvShows", require("./routes/tvShowRouter"))


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ errMsg: err.message })
})

app.listen(3000, () => {
    console.log('The server is running on Port 3000');
});
