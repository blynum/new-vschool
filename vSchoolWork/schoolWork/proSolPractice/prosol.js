// Write a function that takes an array of numbers and returns the largest (without using Math.max())

//iterate through an array and keep track of the max value

function findLargestNumber(arr) {
  if (arr.length === 0) {
    return undefined; // Handles the case where the array is empty
  }

  let largest = arr[0]; // Assume the first element is the largest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i]; // Update the largest if finds a bigger
    }
  }

  return largest;

  /*   let max = arr[0];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
    }
  
    return max; */
}

let arr = [550, 10, 20, 600, 30, 50, 200];
console.log(findLargestNumber(arr));

// Write a function that takes an array of words and a character and returns each word that has that character present. i.e. lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]


let strings = ["$3", "$$$", "C%4!", "Hey!"];

function lettersWithStrings(strings, char) {
  const final = []; // Creates an empty array to store the strings that contain the character 'char'

  for (i = 0; i < strings.length; i++) { //Loop through each string in the 'strings' array
    if (strings[i].includes(char)) { // Check if the current string contains the character 'char'

      final.push(strings[i]); // If it does, add the string to the 'final' array
    }
  }

  return final;
}
console.log(lettersWithStrings(strings, "$"));

// document.write(charFind(char))

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function divBy2(num1, num2) {

  return num1 % num2 === 0; // Check if num1 is divisable by num2 (remainder is 0)
}

console.log(divBy2(50, 6));

// Write a function that takes an array of numbers and returns the second highest number.

function getSecondHighest(numbers) {
  // Establish the highest number with the first element in the array
  let highest = numbers[0];
  // Create a variable for the second-highest number without establishing yet
  let secondHighest;
  // Loop through each number in the array
  for (let i = 0; i < numbers.length; i++) {
    // Check is the current number is the greater than the current highest
    if (numbers[i] > highest) {
      //If it is, update the second-highest to the old highest
      secondHighest = highest;
      //Update the new highest to be the current number
      highest = numbers[i];
    }
    //If the current number is not greater than the highest, but greater or equal to the second-highest
    else if (numbers[i] >= secondHighest) {
      // Update the second-highest to the current number
      secondHighest = numbers[i];
    }
  }
  return secondHighest;
}

console.log(getSecondHighest([4, 6, 2, 43, 3, 9])); // => 9
console.log(getSecondHighest([4, 100, 2, 43, 3, 9])); // => 43


/* "1. Write a function called `largestNumber` that takes 3 numbers and returns the largest number. Test with the following: */

function largestNumber2(num1, num2, num3) {
  let arr = [num1, num2, num3];
  let maxNum = num1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i]
    }
  }
  return maxNum
}

console.log(largestNumber2(3, 8, 9))
console.log(largestNumber2(25, -10, 10))

function findLargestNumber2(num1, num2, num3) {
  return Math.max(num1, num2, num3)
}

console.log(findLargestNumber2(3, 8, 12))
console.log(findLargestNumber2(25, -10, 15))


function largestNumber3(num1, num2, num3) {
  let maxNum = num1;

  if (maxNum < num2) {
    maxNum = num2
  }
  if (maxNum = num3) {
    maxNum = num3
  }
  return maxNum
}



console.log(findLargestNumber2(3, 60, 12))
console.log(findLargestNumber2(25, 100, 15))

