
// Creating Elements in JS with 'for loops + createElement'

// This is an array of data:
// var powerRangers = [
//     "Jason Lee Scott",
//     "Kimberly Hart",
//     "Zack Taylor",
//     "Trini Kwan",
//     "Billy Cranston"
// ]

// Create new element with for loops and be able to add additional names
// powerRangers.lengths allow for additional names to be added

// The ability to select elements//
// var rangersList = document.getElementById("rangers")

// For Loops and adding new elements to a page:
// for (let i = 0; i < powerRangers.length; i++) {
//     var newName = document.createElement("li")
//     newName.textContent = powerRangers[i]
//     rangersList.append(newName)
// }

// Refactor above using .innerHTML

// var rangersList = document.getElementById("rangers")
// for (let i = 0; i < powerRangers.length; i++) {
//     rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"

// }

// Display thier name and the color


const powerRangers = [
    {name: "Jason Lee Scott", color: "Red"},
    {name: "Kimberly Hart", color: "Pink"},
    {name: "Zack Taylor", color: "Black"},
    {name: "Trini Kwan", color: "Yellow"},
    {name: "Billy Cranston", color: "Green"}

]

var rangersList = document.getElementById("rangers")

for (let i = 0; i < powerRangers.length; i++) {
    var newName = document.createElement("li") 
    newName.textContent = [powerRangers[i].name + "-" + powerRangers[i].color]
    rangersList.append(newName)

}