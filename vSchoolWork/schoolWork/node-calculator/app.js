

import { question } from 'readline-sync';
var num1 = parseInt(question('May I have your 1st number? '));
var num2 = parseInt(question('May I have your 2nd number? '));
var operation = (question('Please enter the operation to perform? '));


if (operation == 'add') {
    console.log(add(num1, num2))
} else if (operation == 'sub') {
    console.log(sub(num1, num2))
} else if (operation == 'mul') {
    console.log(mul(num1, num2))
} else if (operation == 'div') {
    console.log(div(num1, num2))
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
