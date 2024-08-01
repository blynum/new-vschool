function isPrime(n) {
  if (n <= 1)
    return false

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false
    }
  }
  return true
}

/* console.log(2, " is prime? ", isPrime(2));
console.log(3, " is prime? ", isPrime(3));
console.log(4, " is prime? ", isPrime(4));
console.log(5, " is prime? ", isPrime(5));
console.log(9, " is prime? ", isPrime(9)); */


/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here

const squared = nums.map((num) => num * num)

/* console.log(squared) */

/*Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here
const capitalLetter = names.map(name => name[0].toUpperCase() + name.slice(1))

/* console.log(capitalLetter) */

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const pokemonHTML = pokemon.map(poke => `<p>${poke}</p>`)

//console.log(pokemonHTML)

//Level 3 Assessment

//Challenge 1: You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values. Write a function solution(a) that takes in an array a and returns a new array with the following conditions: All non -1 values in the array should be sorted in ascending order. The -1 values should retain their original index positions in the sorted array.

function solution(arr) {
  // Create a copy of the original array to avoid modifying it using the spread operator
  const result = [...arr];

  // Create an array to store the indices of -1 values
  const minusOneIndices = [];

  // Create an array to store non-negative values
  const nonNegativeValues = [];

  // Iterate over the array and separate -1 values and non-negative values
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      minusOneIndices.push(i);
    } else {
      nonNegativeValues.push(arr[i]);
    }
  }

  // Sort the non-negative values in ascending order
  nonNegativeValues.sort((a, b) => a - b);

  // Reconstruct the array with sorted non-negative values and preserved -1 indices
  let nonNegativeIndex = 0;
  for (let i = 0; i < result.length; i++) {
    if (minusOneIndices.includes(i)) {
      result[i] = -1;
    } else {
      result[i] = nonNegativeValues[nonNegativeIndex];
      nonNegativeIndex++;
    }
  }

  return result;
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180])); // [-1, 150, 160, 170, -1, -1, 180, 190]
console.log(solution([5, 3, 1])); // [1, 3, 5]
console.log(solution([-1, -1, -1, -1])); // [-1, -1, -1, -1]
console.log(solution([100, -1, 50, -1, 75])); // [50, -1, 75, -1, 100]

//Challenge #2 Write a JavaScript function called countVowels that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count. Implement the countVowels function using either the provided example solutions or your own solution.

function countVowels(str) {
  // Convert the string to lowercase for case-insensitive matching
  str = str.toLowerCase();

  // Define a set of vowels
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // Initialize the vowel count
  let count = 0;

  // Iterate through each character in the string
  for (let char of str) {
    // Check if the character is a vowel
    if (vowels.has(char)) {
      count++;
    }
  }

  return count;
}

const input1 = 'Hello, World!';
console.log(countVowels(input1)); // Output: 3

const input2 = 'Counting Vowels';
console.log(countVowels(input2)); // Output: 5

const input3 = 'Supercalifragilisticexpialidocious';
console.log(countVowels(input3)); // Output: 5

// Write a JavaScript function called **`findSumOfTwo`** -done
// that takes in an array of numbers and a target number. -done
//The function should find two numbers in the array that add up to the target number -done
// return them as an array. --done
//If there are multiple pairs that satisfy the condition, return any one of them.
// If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

function findSumOfTwo(numbers, target) {

  //loop over numbers and determine what numbers equal the target number
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]]
      }
    }
    return []
  }
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]
