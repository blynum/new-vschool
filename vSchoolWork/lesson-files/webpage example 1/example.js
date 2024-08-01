// Color controls

var purpleBtn = document.getElementById("purple")
var greenBtn = document.getElementById("green")
var blueBtn = document.getElementById("blue")
var redBtn = document.getElementById("red")

purple.addEventListener("click", function() {
    document.body.style.backgroundColor = "rebeccapurple"
})

green.addEventListener("click", function() {
    document.body.style.backgroundColor = "forestgreen"
})

blue.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue"
})

red.addEventListener("click", function() {
    document.body.style.backgroundColor = "firebrick"
})

white.addEventListener("click", function() {
    document.body.style.backgroundColor = "white"
})

// Count controls
var count = 0;
var subtractBtn = document.getElementById("subtract")
var addBtn = document.getElementById("add")

subtractBtn.addEventListener("click", function() {
    count--
    document.getElementById("counter").innerText = count;
})

addBtn.addEventListener("click", function() {
    count++
    document.getElementById("counter").innerText = count;
})
