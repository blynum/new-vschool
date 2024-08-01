
// const headText = document.createElement("header")
// headText.textContext = "Made With JavaScript"
// const header = document.getElementById("#header")
// header.append(headText)

const headText = document.getElementById("header1")
const newHead = document.createElement("header")
newHead.textContent = "Made With JavaScript!!"
headText.append(newHead)

// const headText2 = document.getElementById("myspan")
const newHead2 = document.createElement("span")
newHead2.textContent = "(Belita)"
const newHead3 = document.createElement("span2")
newHead3.textContent = "Wrote the JavaScript"
// span.append(headText)

document.getElementById("header1").append(newHead2)
document.getElementById("header1").append(newHead3)

newHead.style.fontSize = "32px"
newHead.style.textAlign = "center"


newHead2.classList.add("new-span")

// newHead2.style.textAlign = "center"



newHead3.classList.add("new-span2")
// newHead3.style.textAlign = "center"
newHead3.style.position = "absolute"
newHead3.style.margin = "auto"
newHead3.style.left = "410px"
newHead3.style.right = "0"


// myspan.style.fontSize = "15px"

// console.log(document.querySelector("span").className)

// Bronze - Changing Text Messages

document.getElementById("message-left1").textContent = "Hey, what are you doing tonight?"

document.getElementById("message-right1").textContent = "Chillin'"

document.getElementById("message-left2").textContent = "Wanna go to P.F Changs for dinner?"

document.getElementById("message-right2").textContent = "Cool, I'll be there"

// Bronze - Click the "clear" button 

// document.getElementById("clear-button").addEventListener("click", function() {
//     document.getElementsByClassName("messages").value = ''
// });

const input = document.querySelector('#clear');
const textArea = document.querySelector('.messages');

input.addEventListener('click', function () {
    // Only cleared the first message
    // textArea.textContent = '';
    document.querySelector('.messages').innerHTML = ""
}, false);


// Silver - Change color of messages when theme is picked

let themeValue = document.getElementById('theme-drop-down').value
let previousValue = themeValue;
// const changeTheme = () => {
const changeTheme = function () {
    themeValue = document.getElementById('theme-drop-down').value

    let arrayOfMessages = document.getElementsByClassName("message")
    themeValue = document.getElementById("theme-drop-down").value

    for (var i = 0; i < arrayOfMessages.length; i++) {
        arrayOfMessages[i].classList.remove(previousValue)
        arrayOfMessages[i].classList.add(themeValue)
    }
    previousValue = themeValue;
}

document.getElementById("theme-drop-down").addEventListener('change', changeTheme)



// Gold - Add More messages using the form

const form = document.message

// Submit (Send) Event

/* form.addEventListener("submit", function(event){
    event.preventDefault()
   
    const name = form.newMessage.value
    form.newMessage.value = ""

    // 1: .create or .getElement
    const h3 = document.createElement("h3")

    // 2. Edit Content 
    h3.textContent += name
    h3.classList.add("message", "left", themeValue)

    //3. Append to DOM
    // document.getElementsByTagName("body")[0].append(h2)
    document.getElementsByClassName("messages")[0].append(h3)
    
}) */

let lastMessageSide = "left"; // Initialize the last side as "left"

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.newMessage.value;
    form.newMessage.value = "";

    // 1. Create a new <h3> element
    const h3 = document.createElement("h3");

    // 2. Edit Content 
    h3.textContent = name;

    // 3. Add the appropriate class based on the last message side
    h3.classList.add("message", lastMessageSide, themeValue);

    // 4. Alternate the lastMessageSide for the next message
    lastMessageSide = lastMessageSide === "left" ? "right" : "left";

    // 5. Append to the DOM
    document.querySelector(".messages").appendChild(h3);
});



