// Filter Anagrams


function filterAnagrams(arr, target) {
    // Function to sort the characters of a word
    const sortWord = (word) => word.split('').sort().join('');

    // Sort the target word for comparison
    const sortedTarget = sortWord(target);

    // Filter the array to find anagrams
    return arr.filter(word => sortWord(word) === sortedTarget);
}

// Test the function
const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

const anagrams = filterAnagrams(words, target);

console.log(anagrams); // Output: ['listen', 'silent']


//Sort by Multiple Criteria

function sortByMultipleCriteria(people) {
    return people.sort((a, b) => {
        if (a.age === b.age) {
            // If ages are equal, sort by name
            return a.name.localeCompare(b.name);
        } else {
            // Otherwise, sort by age
            return a.age - b.age;
        }
    });
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
];

const sortedPeople = sortByMultipleCriteria(people);
console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]

// Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.

function calculateTotalPrice(products) {
    //multiply price and quantity
    const total = products.map(item => ({
        name: item.name,
        totalPrice: item.price * item.quantity

    }))
    return total
}

const products = [
    { name: 'Apple', price: 1.5, quantity: 3 },
    { name: 'Banana', price: 0.75, quantity: 5 },
    { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]