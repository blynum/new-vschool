const express = require("express");
const app = express();

//Fake Data
const users = [
    { name: 'joe', age: 20 },
    { name: 'moe', age: 24 },
    { name: 'betty', age: 20 },
    { name: 'sarah', age: 20 },
    { name: 'mike', age: 20 }
];



//1. Endpoint (mount path)
//2. CallBack function
app.get('/users', (req, res) => {
    res.send(users);
});



app.listen(3000, () => {
    console.log("App is listening on port 3000!");
});








