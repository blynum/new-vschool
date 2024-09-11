/* Write a function called extractUniqueCharacters that takes an array of strings and returns a new array containing only the unique characters from all the strings.
function extractUniqueCharacters(strings) {
  
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y'] */

function extractUniqueCharacters(strings) {
    // Create a new Set to store unique characters
    let uniqueCharsSet = new Set();

    // Loop through each string in the input array
    for (let str of strings) {
        // Loop through each character in the current string
        for (let char of str) {
            // Add the character to the Set (it automatically handles duplicates)
            uniqueCharsSet.add(char);
        }
    }

    // Convert the Set back to an array and return it
    return Array.from(uniqueCharsSet);
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']



/* Write a function called sortByProperty that takes an array of objects and a property name as input. The function should return a new array containing the objects sorted in ascending order based on the specified property.
function sortByProperty(objects, propertyName) {
  
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge); */

function sortByProperty(objects, propertyName) {
    // Use the JavaScript `sort()` method to sort the array of objects
    return objects.slice().sort((a, b) => {
        // Compare the property values for sorting
        if (a[propertyName] < b[propertyName]) {
            return -1; // Return -1 if a's property is less than b's property
        } else if (a[propertyName] > b[propertyName]) {
            return 1; // Return 1 if a's property is greater than b's property
        } else {
            return 0; // Return 0 if both properties are equal
        }
    });
}

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);
// Output: 
// [
//   { name: 'Bob', age: 25 },
//   { name: 'David', age: 28 },
//   { name: 'Alice', age: 30 },
//   { name: 'Charlie', age: 35 }
// ]
