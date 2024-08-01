// Post request
// Request Body


const todoForm = document.todoform

todoForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const newTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    axios.post("https://api.vschool.io/scrimbalessons/todo", newTodo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

})

//DELETE Request with axios

axios.delete("https://api.vschool.io/scrimbalessons/todo/64559fe378fe452c1149560b")
    .then(response => console.log(response))
    .catch(error => console.log(error))






// GET all todos
/* axios.get("https://api.vschool.io/scrimbalessons/todo")
    .then(res => console.log(res))
    .catch(err => console.log(err)) */