const axios = require("axios").default
// const lukeSkywalker = axios.get("https://swapi.dev/api/people/1");
// console.log(lukeSkywalker);

// const { default: axios } = require("axios");

// function assignResponseToVariable(response) {
//   console.log(response.data);
// }
// axios.get("https://swapi.co/api/people/1").then(assignResponseToVariable);

// axios.get("https://swapi.co/api/people/1")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const axios = require("axios");
// const newTodo = axios.post("https://api.vschool.io/belle/todo/");
// console.log(newTodo);

// axios
//   .post("https://api.vschool.io/belle/todo/", newTodo)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   url: https://api.vschool.io/belita/todo

//   Get All - an Array

// axios.get("https://api.vschool.io/belita/todo")
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

//   Get One - single item

// axios
//   .get("https://api.vschool.io/belita/todo/<id>")
//   .then((response) => console.log(response.data));
//   .catch(error => console.log(error))

// Show on browser

// axios
//   .get("https://api.vschool.io/belita/todo")
//   .then((response) => {
//     for (let i = 0; i < response.data.length; i++) {
//       const h1 = document.createElement("h1");
//       h1.textContent = response.data[i].title;
//       document.body.appendChild(h1);
//     }
//   })
//   .catch((error) => console.log(error));

// Post Request
// Request Body

// const todoForm = document.todoForm;

// todoForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const newTodo = {
//     title: todoForm.title.value,
//     description: todoForm.description.value,
//     imgUrl: todoForm.imgUrl.value,
//   };
//   axios
//     .post("https://api.vschool.io/belita/todo", newTodo)
//     .then((response) => console.log(response.data))
//     .catch((error) => console.log(error));
// })


// Delete Request

// axios.delete("https://api.vschool.io/belita/todo/61952985ee6f8d3fc3fef580")
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error))

// Possibly add Delete button to brower, but how do we determine the specific id?
// const button = document.getElementById('delete-button')

// button.addEventListener("click", function(){
//     axios.delete("https://api.vschool.io/belita/todo/61952985ee6f8d3fc3fef580")
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))
// })

// Put Request - updating an existing item in the database



const updates = {
  title: "I Changed The Title Again",
  description: "I learning Axios Put Request"
}

axios.put("https://api.vschool.io/belita/todo/61942e5eee6f8d3fc3fef571", updates)
  .then(response => console.log(response.data))
  .catch(error => console.log(error))

