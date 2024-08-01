
// Modifying Text of Element innerHTML - Security Risk
// innerText - expensive 
// textContent - "Best Options"

// One way to change text via JS
// var person = {name: "Joe"}
// person.name = "Jim"
// console.log(person)

//** Practice 
// 1. Select the h1 element
// 2. Select the h1 element's text to a variable
// 3. Change the paragraph element's text to the be the same as the text inside the h1

var text = document.querySelector("#header").textContent
document.querySelector("#paragraph").textContent = text

// Modifying Styles with JS
// fontSize, backgroundColor, display, textAlign. margin, padding, border can be access under the js.style propery
// In JS the properties are camelCased

// Selecting the element with id of #header2

// var header2 = document.getElementById("header2")
// console.log(typeof header2.style)

// header2.style.color = "blue"

// Change Background Color with JS

// ** This is my attempt 
// document.querySelector("html").style.backgroundColor = "red"

// ** This the answer given = every element with chosen by #id, .class or html element has CSS style properties
// document.body.style.backgroundColor = "burlywood"


// Progress Point: 37.5 className and classList

// className
// var className = document.querySelector("#header2").className
// console.log(className)

// classList - consider best way
document.querySelector("#header2").classList.add("new-class")
// console.log (document.querySelector("#header2").className)

// remove a class
document.querySelector("#header2").classList.remove("another")
console.log (document.querySelector("#header2").className)

// another classList Method -if the class is there it will turn it on and off 
document.querySelector("#header2").classList.toggle("another")
console.log (document.querySelector("#header2").className)

// Progress Point 38: Modifying Elements - Value
var inputBox = document.getElementById("#text-input")
console.log(inputBox.value)










