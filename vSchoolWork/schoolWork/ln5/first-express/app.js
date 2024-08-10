const express = require("express");
const app = express();

//1. Endpoint (mount path)
//2. CallBack function
app.get('/', (req, res) => {
    res.send("Hello world!");
});



app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});








