
var button = document.getElementById("mybutton")


// button.addEventListener("click", function() {
//     document.body.style.backgroundcolor = "green"
// })


button.addEventListener("click", function() {
    button.style.backgroundColor = "green"
})


// Object Data Type
var cat = {
    name: "Molly",
    age: 3,
    activity: ["Eat", "Sleep", "Play", "Scratch"],
    address: {
        street: "321 Window Street",
        city: "Cat City"
    }
}

// Dot Notation

console.log (cat.activity[0])
console.log (cat.age)

// Bracket Notation

console.log (cat ["activity"])
console.log (cat ["address"]["street"])
console.log (cat ["address"]["city"])

//i++ i = i + 1
for ( var i = 11; i < 12; i++){
    console.log(i)
    console.log('hi')
}

var sports = 'football'

if (sports === 'football'){
    console.log('i am football')
} else if (sports === 'baseball'){
    console.log('i am baseball')
} else {
    console.log('i am something else')
}