const input = require('readline-sync');

let name = input.question("Enter your name: ");
console.log("Hello, " + name + "!")

let num1 = parseInt(input.question("Please Enter a number: "));
let num2 = parseInt(input.question("Please Enter another number: "));
let operation = (input.question('Please enter the operation to perform: '))


if (operation == 'add') {
    console.log("The result is: " + add(num1, num2))
} else if (operation == 'sub') {
    console.log("The result is: " + sub(num1, num2))
} else if (operation == 'mul') {
    console.log("The result is: " + mul(num1, num2))
} else if (operation == 'div') {
    console.log("The result is: " + div(num1, num2))
}

function add(num1, num2) {
    return (num1 + num2)
}

// var result = add(10,5)
// console.log(result)


function sub(num1, num2) {
    return num1 - num2
}

// var result = sub(10,5)
// console.log (result)

function mul(num1, num2) {
    return num1 * num2
}

// var result = mul(10,5)
// console.log (result)

function div(num1, num2) {
    return num1 / num2
}

// var result = div (10,5)
//     console.log (result)