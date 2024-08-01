// Part 1 - GET
function getData() {
    axios.get("https://api.vschool.io/belita/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}
// LISTS In THE BROWSER
function listData(data) {
    clearList()
    for (let i = 0; i < data.length; i++) {
        const itemContainer = document.createElement('div');
        itemContainer.style.background = "#fff"; // Set the background to white
        itemContainer.style.padding = "10px"; // Add some padding
        itemContainer.style.marginBottom = "10px"; // Add margin at the bottom
        itemContainer.style.marginTop = "10px"; // Add margin at the bottom
        itemContainer.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"; // Add a subtle shadow
        itemContainer.style.borderRadius = "5px"; // Round the corners

        const h1 = document.createElement('h1');
        h1.textContent = data[i].title;
        itemContainer.appendChild(h1);

        const h2 = document.createElement('h2');
        h2.textContent = data[i].price;
        itemContainer.appendChild(h2);

        const h3 = document.createElement('h3');
        h3.textContent = data[i].description;
        itemContainer.appendChild(h3);

        const image = document.createElement('img');
        image.src = data[i].imgUrl;
        image.style.width = "100%"; // Make image responsive
        image.style.height = "auto";
        image.style.borderRadius = "5px"; // Round the corners of the image
        itemContainer.appendChild(image);

        const actionsContainer = document.createElement("div");
        actionsContainer.style.display = "flex"; // Use flexbox to align items in a row
        actionsContainer.style.alignItems = "center"; // Center items vertically
        actionsContainer.style.justifyContent = "space-around"; // Space out items
        actionsContainer.style.padding = "10px 0"; // Add padding for spacing

        const checkboxContainer = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = data[i]._id;
        checkbox.checked = data[i].completed; // Set the checkbox based on the item's completed status

        if (data[i].completed) {
            h1.style.textDecoration = "line-through";
            h2.style.textDecoration = "line-through";
            h3.style.textDecoration = "line-through";
        } else {
            h1.style.textDecoration = "none";
            h2.style.textDecoration = "none";
            h3.style.textDecoration = "none";
        }

        console.log(data[i])

        const label = document.createElement("label");
        label.htmlFor = data[i]._id;
        label.textContent = " Completed";
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
        //itemContainer.appendChild(checkboxContainer);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "x";
        //itemContainer.appendChild(deleteButton);
        deleteButton.style.marginLeft = "10px";

        // Append both checkbox and delete button to actionsContainer
        actionsContainer.appendChild(checkboxContainer);
        actionsContainer.appendChild(deleteButton);

        // Append actionsContainer to the itemContainer
        itemContainer.appendChild(actionsContainer);

        document.getElementById('todo-list').appendChild(itemContainer);

        checkbox.addEventListener('change', e => {
            const isCompleted = checkbox.checked;
            axios.put(`https://api.vschool.io/belita/todo/${data[i]._id}`, { completed: isCompleted })
                .then(response => {
                    h1.style.textDecoration = isCompleted ? "line-through" : "none";
                    // No need to call getData() here if you don't want to reload all items,
                    // but if you want to ensure all data is fresh, you can uncomment the next line.
                    // getData();
                })
                .catch(err => console.log(err));
        });




        deleteButton.addEventListener("click", e => {
            axios.delete("https://api.vschool.io/belita/todo/" + data[i]._id)
                .then(response => {
                    getData()
                }
                )
        })
    }
    // check()


}
function clearList() {
    const el = document.getElementById('todo-list')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}
getData()
// Part 2 - POST
const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newTodo = {
        title: todoForm.title.value,
        price: todoForm.price.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        // completed: todoForm.checkbox.value
    };

    axios.post("https://api.vschool.io/belita/todo", newTodo)
        .then((response) => {
            getData(); // Refresh the list
            todoForm.reset(); // Clear the form
        })
        .catch((error) => console.log(error));
});