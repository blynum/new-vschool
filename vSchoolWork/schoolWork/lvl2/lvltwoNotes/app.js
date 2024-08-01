// Web Storage

// Setter - save data in local storage (key = value pairs)
// localStorage.setItem("name", "steve");
// localStorage.setItem("age", 10);
// localStorage.setItem("isAlive", true);

// Saving an array to local storage...doesn't look like an array because the local storage needs JSON to turn it into a string, so have to use JSON.stringify
// localStorage.setItem("friends", JSON.stringify(["mark", "tina", "jay"]));
// localStorage.setItem(
//   "address",
//   JSON.stringify({ street: "123 street", city: "SLC" })
// );

// Getter-retrieve items, returns the data
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// const isAlive = localStorage.getItem("isAlive");
// console.log(isAlive);

// Without JSON.parse, an array is pulled as a string - console.log(typeof friends) returns the word string. Need to add JSON.parse to turn the string into an array, object or other complex data types
// const friends = JSON.parse(localStorage.getItem("friends"));
// const address = JSON.parse(localStorage.getItem("address"));
// console.log(address);

// Remove
// localStorage.removeItem("age");

//localStorage is an object? so I don't have to use setItem or getItem...need to be define, so setItem and getItem are recommended
// localStorage.dinosaur = "T-Rex";
// console.log(localStorage.dinosaur);

// setTimeout and setInterval are higher order functions, which means they take a function as one of their arguments like we see below:

// setTimeout(function () {}, 1000);

// The first argument is setting what should happen, the second argument is for setting the time. The above time argument is in an amount of milliseconds, meaning 1000 = 1 second.The setTimeout about will run the function adter 1 second has passed:

// setTimeout(function () {
//   console.log("hello!");
// }, 1000);

// setTimeout is great for running a function once. To run a function on a repeated basis, use setInterval() method

// setInterval(function () {
//   console.log("hello");
// }, 1000);

// Tell my program to stop: 1. adject my original setInterval call and store it in a variable

// var intervalID = setInterval(function () {
//   console.log("hello");
// }, 1000);

// clearInterval(intervalID);

// The variable I assign works like an off switch. When I need to have an interval or timeout stop, call this method:
// clearTimeout(timeoutID);

// var display = document.getElementById("time-display");

// function getTime() {
//   var now = new Date();
//   var hour = now.getHours();
//   var min = now.getMinutes();
//   var sec = now.getSeconds();
//   if (hour < 10) {
//     hour = `0${hour}`;
//   }
//   if (min < 10) {
//     min = `0${min}`;
//   }
//   if (sec < 10) {
//     sec = `0${sec}`;
//   }

//   display.textContent = `${hour}:${min}:${sec}`;
// }

// setInterval(getTime, 1000);

// Higher Order Functions: take a function as a parament and/or returns a function
//Higher Order array methods follow the first criteria as they require a function as a parameter

// This is the higher order function
function doMath(num1, num2, callback) {
  return callback(num1, num2);
}

// These are the callback functions
function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

console.log(doMath(5, 10, subtract));
console.log(doMath(2, 4, sum));

// .map returns a new array the same size as the input array
// allow me to take an array of data and create a new array of data from it.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const result = arr.map(function (num) {
  // arr[i]
  return num + 9;
});
console.log(result);

// ES6 version

// const result = arr.map((num) => num + 10);

const users = [{ name: "joe" }, { name: "steve" }, { name: "lisa" }];

const result2 = users.map(function (user) {
  return user.name;
});
console.log(result2);

// Sort Array Method - goes through each item in an array and sorts it

var words = ["bat", "pineapple", "drugs", "zebra", "ghost"];

console.log(words.sort());

// Array Filter Method

// Set Interval and Set TimeOut
// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// const timer = document.getElementById("timer");

// let count = 0;
// Don't set intervalId to any value; access to global scope
// let intervalId;
// timer.textContent = count;

// function incrementTimer() {
//   count++;
//   timer.textContent = count;
// }
// Add event listener to the start button
// startBtn.addEventListener("click", function () {
//   intervalId = setInterval(incrementTimer, 1000);
// });

// stopBtn.addEventListener("click", function () {
//   clearInterval(intervalId);
// });

// Error Handling

var input = "";

try {
  if (input == "") {
    throw "Input can not be empty";
  } else if (input.length > 5) {
    throw "Input is to big";
  } else {
    console.log("You code runs fine!");
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("Runs no matter what");
  console.log("And the input was " + input);
}

// ES6 Review: var scopes to the function curly brackets, let and const scope to the nearest curly bracket

function getAgeRange(person) {
  if (person.age < 18) {
    var ageRange = "Child";
  } else if (person.age >= 18 && person.age < 80) {
    var ageRange = "Adult";
  } else {
    var ageRange = "Elderly Person";
  }
  return ageRange;
}

function getAgeRange(person) {
  let ageRange;
  if (person.age < 18) {
    ageRange = "Child";
  } else if (person.age >= 18 && person.age < 80) {
    ageRange = "Adult";
  } else {
    ageRange = "Elderly Person";
  }
  return ageRange;
}
// What would the above functioon potentially look like if we destructured the person parameter?

function getAgeRange({ age }) {
  let ageRange;
  if (age < 18) {
    ageRange = "Child";
  } else if (age >= 18 && age < 80) {
    ageRange = "Adult";
  } else {
    ageRange = "Elderly Person";
  }
  return ageRange;
}

// Why can we add .ageRange to person when we used const to define person? Because it's immutable
const person = { name: "Andrea", age: 27 };

// Template literal
console.log(
  `The ${person.ageRange}, ${person.name}, is ${person.age} years old`
);

// Using the Spread Operation to do the same thing concat, join multiple arrays into 1

const springMonths = ["March", "April", "May"];
const fallMonths = ["September", "October", "November"];
const fringeMonths = [...springMonths, ...fallMonths];
console.log(springMonths, fallMonths, fringeMonths);

// Using the Rest Operator
function addNumbers(...numbers) {
  // numbers is now an array that we can use .reduce() on
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7, 8);

// ES6 Review 2

// const button = document.getElementById("button");
// const output = document.getElementById("output");
// const input2 = document.getElementById("input");
// change this function to be an arrow function
// button.addEventListener("click", () => {
//   output.innerText = `You've submitted:, ${input2.value}`;
// });

//-------------------------------------------------------------------------------------------
// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
function collectAnimals(/*your code here*/ ...animals) {
  /*and here*/ return animals;
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

//-------------------------------------------------------------------------------------------
// Use destructuring to use the property names as variables:

const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks",
};

function parseSentence(/*param*/ { location, duration }) {
  return `We're going to have a good time in ${location} for ${duration}`;
}

// console.log(parseSentence(vacation)) // this line will break stuff unless you fix the parameter

//-------------------------------------------------------------------------------------------
// Make the following function more ES6xy. Use at least both the rest and spread operators:
// this function should add as many items to the front of the returned array as the caller of the function wants

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(...array);
// }

function unshift(array, ...second) {
  return [...second, ...array];
}

//-------------------------------------------------------------------------------------------
// make "greeting" default to "hello"
function greet(name, greeting) {
  return greeting + ", " + name;
}

function greet(name, greeting = "hello") {
  return greeting + ", " + name;
}

console.log(greet("Emily", "wassssup"));

// Using the Rest Operator
function addNumbers(...numbers) {
  // numbers is now an array that we can use .reduce() on
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5, 6, 7, 8);

// Using Spread Operator - two arrays joined into one
const defaultColors = ["red", "green"];
const userFavoriteColors = ["orange", "yellow"];
const fallColors = ["brown", "golden"];

console.log([...defaultColors, ...userFavoriteColors, ...fallColors]);

function validateShoppingList(...items) {
  if (items.indexOf("milk") < 0) {
    return ["milk", ...items];
  }
  return items;
}

console.log(validateShoppingList("oranges", "bread", "eggs"));

// Make more ES6xy

function product(a, b, c, d, e) {
  const numbers = [a, b, c, d, e];

  return numbers.reduce(function (acc, number) {
    return acc * number;
  }, 1);
}

console.log(product());

// AJAX
// XMLHttpRequest
// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.responseText

// Two methods

const xhr = new XMLHttpRequest();

// What type of request

// Requesting single data

// method   URL                        async
// xhr.open("GET", "https://swapi.co/api/people/1", true);
// xhr.send();

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const JSONdata = xhr.responseText;
//     // change string of the xhr.responseText to JSON
//     const data = JSON.parse(JSONdata);
//     // console.log(data);
//     showData(data);
//     // error handling
//   } else if (xhr.readyState === 4 && xhr.status !== 200) {
//     console.log(xhr.responseText);
//   }
// };

// // Show Data on the HTML page
// function showData(luke) {
//   const h1 = document.createElement("h1");
//   h1.textContent = luke.name;
//   document.body.appendChild(h1);
// }

// Requesting mutiple
xhr.open("GET", "https://swapi.co/api/people/1", true);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    // change string of the xhr.responseText to JSON
    const data = JSON.parse(JSONdata);
    // console.log(data.results);
    showData(data.results);
    // error handling
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    console.log(xhr.responseText);
  }
};

// Show Data on the HTML page
function showData(arr) {
  for (let i = 0; i < arr.length; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = arr[i].name;
    document.body.appendChild(h1);
  }
}

// xhr.readyState;
// stage 1 = request has been sent
// 2
// 3
// 4 - server has responded

// xhr.status;
// 200 - good to go
// 404 - page cannot be found
// 201
// 500 - something is wrong with server
