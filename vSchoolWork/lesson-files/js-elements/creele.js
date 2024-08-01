// Creating Elements in JS - creating a element doesn't put in on the page, it needs to be saved and stored as a variable 
// Adding a new item to list on HTML file

var newLi = document.createElement("li")

// Adding content to my list item
newLi.textContent = "3"

// Adding my newLi to the ul id 
var myList = document.getElementById("my-list")
myList.append(newLi)
// Puts new list or element at the top
myList.prepend(newLi) 

// Challenge: Add paragraph to the existing unordered list with any text and do it completely in JavaScript!

var newP = document.createElement("p")
newP.textContent = "This is my new paragraph"

document.body.append(newP)

// Challenge change style of new paragraph only using JS
newP.style.fontSize = "30px"
newP.style.textAlign = "center"

// innerHTML - lack of secruity and slow, but it is useful
// innerHTML vs textContent

// Ignores the HTML formatting and only sees data
var mylist = document.getElementById("my-list")
console.log(mylist.textContent)

// Sees the <li> or HTML elements, well as the data
var mylist = document.getElementById("my-list")
console.log(mylist.innerHTML)

// Adding new elements using innerHTML
mylist.innerHTML += "<li>4</li>"

// Challenge: Adding new element using innerHTML method

// My attempt - didn't need to create a new element or append the body element

var newP2 = document.createElement("p")
newP2.innerHTML += "<p>This is another paragraph</p>"
document.body.append(newP2)

// The Answer, plus adding styling since a new element was not created or saved as a variable (containers for storing data)

document.body.innerHTML += "<p id='para'>This is another paragraph</p>"
document.getElementById("para").style.textAlign = "center"