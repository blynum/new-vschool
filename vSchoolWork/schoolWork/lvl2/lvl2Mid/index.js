// Write a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.


const numbers = [4, 7, 3, 1, 10]

function sortNumbers(numbers) {
    return numbers.sort(function (a, b) {
        return a - b;
    });
}

console.log(sortNumbers(numbers))


//Write a function that takes an array of strings and returns a new array where each string is converted to uppercase.

const strings = ['hello', 'world', 'javascript']
/*function convertToUppercase(strings) {
    return strings.map(strings.toUpperCase())

} */

/* let convertToUppercase = strings.map(function (index) {
    return strings.toUpperCase(index[0])
}) */

let convertToUppercase = strings.map(strings => strings.charAt(0).toUpperCase() + strings.slice(1))


console.log(convertToUppercase)

// Write a function that takes an array of numbers and returns a new array containing only the even numbers.
const newNumbers = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(nums) {
    return nums.filter(function (num) {
        return num % 2 === 0
    }
    )
}


console.log(filterEvenNumbers(newNumbers));  // Output: [2, 4, 6]


//Wrtie a function that takes the base and height of a triangle and return its area
function triArea(base, height) {
    return base * height / 2
}
console.log(triArea(10, 10))