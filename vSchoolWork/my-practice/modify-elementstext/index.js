// innerHTML - security risk
// innerText - "expensive"?
// textContent

/* const person = { name: 'Joe' }
person.name = "Jim"
console.log(person) */

/**
 * 1. Select the h1 element
 * 2. Save the h1 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h1
 */

/* let changeText = document.getElementsByTagName("h1")[0].textContent
document.getElementsByTagName('p')[0].textContent = changeText */

const text = document.querySelector(".header").textContent
document.querySelector(".paragraph").textContent = text

/* const textColor = document.querySelectorAll(".header");
for (let i = 0; i < textColor.length; i++) {
    textColor[i].style.backgroundColor = "pink";
}
const text = document.querySelectorAll(".paragraph");
for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "purple"
} */