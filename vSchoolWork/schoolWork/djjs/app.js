
const button = document.getElementById("dj-square")

// Used switch statement to change the color of the dj-square when different keys (keyCodes) were pushed. 
function changeColor(e) {
    console.log(e)
    switch (e.keyCode) {
        case 66:
            button.style.backgroundColor = 'blue';
         break;
        case 82:
            button.style.backgroundColor = 'red';
         break;
        case 89:
            button.style.backgroundColor = 'yellow';
          break;
        case 71:
            button.style.backgroundColor = 'green';
            break;
        case 79:
            button.style.backgroundColor = 'orange';
            break;


    }
}
// Added the EventListener to the whole document vs just the button
document.addEventListener("keydown",changeColor)

// Each color and action needed it's own function and EventListener
function blueSquare() {
    console.log("Mouse Over")
    this.style.backgroundColor = "blue"
 }
button.addEventListener("mouseover", blueSquare)

function redSquare () {
    console.log("Button down")
    this.style.backgroundColor = "red"
}
button.addEventListener("mousedown", redSquare)

function yellowSquare () {
    console.log("Button Let Go")
    this.style.backgroundColor = "yellow"
}
button.addEventListener("mouseup", yellowSquare)

function greenSquare () {
    console.log("Double Click")
    this.style.backgroundColor = "green"
}
button.addEventListener("dblclick", greenSquare)

// Added style to the 'button' and the Eventlistener to the window, because the effect of the scroll is happening in the button, but the action is taking place in the window.
function orangeSquare () {
    console.log("Mouse Scroll")
    button.style.backgroundColor = "orange"
}
window.addEventListener("wheel", orangeSquare)