// Addition Assignment Operator vs Addition Operator 


let x = 5;
let y = 3;

let w = x += 2 // x is now 7, not 5

let z = x + y // so the equation is not 7 + 5...not 5 + 3

console.log(w, z)


const inputString = "Hello, World!";
let charCount = 0;
for (let i = 0; i < inputString.length; i++) {
    charCount++;
}
console.log(`The number of characters in the string is: ${charCount}`);
