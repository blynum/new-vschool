/* const collection = document.getElementsByClassName("stuff");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.fontSize = "50px";
}


const header = document.getElementById("header")
header.style.color = "blue";

document.getElementsByTagName */

//Function to change the color of the elements with the 'box' class

function changeColors() {
    var boxes = document.getElementsByClassName('box');

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = getRandomColor();
    }
}

//Function to generate a ransdom color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.getElementById('changeColorBtn').addEventListener('click', changeColors);

