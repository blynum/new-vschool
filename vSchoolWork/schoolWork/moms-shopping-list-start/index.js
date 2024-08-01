// Storing the list items put into the input field
// const listItems = document.getElementById("list")

// Adding event listener to the form to listen for a click.
document.getElementById("add-todo").addEventListener("submit",addListItem)

function addListItem (event) {
    event.preventDefault()
   const listItem = createListItem()
   document.getElementById("list").appendChild(listItem)
   listItem.querySelector("button").addEventListener('click', editButton)
   listItem.querySelector("button + button").addEventListener('click', deleteButton)
    console.log(listItem)
}

// Creating the item once the event takes place and placing it as list item
function createListItem() {
    const listItem = document.createElement("li")
    // storing the user information from the form and the input box. Can use .notation to call the "name" of forms and input boxes
    let listItemValue = document.addItem.title.value
    // attaching text to "li"
    const p = document.createElement("p")
    p.textContent = listItemValue
    const editButton = document.createElement('button')
    const deleteButton = document.createElement('button')
    editButton.textContent = "edit"
    deleteButton.textContent = "X"
    listItem.append(p, editButton, deleteButton)
    return listItem
}

// Adding the ability to delete and item from the list

function deleteButton(event) {
	//event is the click event object
  	//event.target is the <button> clicked on
  	//event.target.parentElement is the <li> "parent" of the <button> just clicked on
  	//event.target.parentElement.remove() deletes the entire <li> and its children
  	event.target.parentElement.remove();
}

function editButton(event) {
	const editButton = event.target;
	if (editButton.textContent === "Save") return saveButton(event);
  	const p = event.target.parentElement.querySelector("p");
  	const listItemName = p.textContent;
	const input = document.createElement("input");
  	// input.value = listItemName;
  	p.after(input); //append <input> after the <p>
  	editButton.textContent = "Save";
  	// editButton.removeEventListener("click", editButton);
  	// editButton.addEventListener("click", saveButton);
}

function saveButton(event) {

	const saveButton = event.target;
  	saveButton.textContent = "Edit";
  	saveButton.removeEventListener("click", saveButton);
  	saveButton.addEventListener("click", editButton);
  	const input = saveButton.parentElement.querySelector("input");
  	const p = saveButton.parentElement.querySelector("p");
  	const newListItemName = input.value;
    //   console.dir(input)
  	p.textContent = newListItemName;
  	input.remove();
}
