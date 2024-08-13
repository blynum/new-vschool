const express = require("express");
const app = express();

//1. Endpoint (mount path)
//2. CallBack function
app.get('/user', (req, res) => {
    res.send({ name: "jane", age: 35 });
});



app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});








