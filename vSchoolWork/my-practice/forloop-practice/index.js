/* let powerRangers = [
    "Jason Lee Scott",
    "Kimberly Hart",
    "Zack Taylor",
    "Trini Kwan",
    "Billy Cranston"
] */

/*Using Text Content
let rangersList = document.getElementById("rangers")
for (let i = 0; i < powerRangers.length; i++) {
    let newName = document.createElement("li")
    newName.textContent = powerRangers[i]
    rangersList.append(newName)
}
*/


/* let rangersList = document.getElementById("rangers")

for (let i = 0; i < powerRangers.length; i++) {
    rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
} */

const newP = document.createElement("p");
newP.textContent = "Hello World";
newP.style.textAlign = "center"
newP.style.fontSize = "30px"
document.body.append(newP)
