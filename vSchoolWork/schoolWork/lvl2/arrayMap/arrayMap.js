// 1) Make an array of numbers that are doubles of the first array**

let numbers = [2, 5, 100];

let doubleNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubleNumbers); // [4, 10, 200]

// let numbers = [10, 15, 13];

// let doubledNumbers = numbers.map(function (number) {
//   return number * 2;
// });
// console.log(doubledNumbers);

function doubleNumbers2(arr) {
  return arr.map((num) => num * 2);
}
//Instead of creating a variable first, I've put the information in the console
console.log(doubleNumbers2([2, 5, 100])); // [4, 10, 200]

// const doubleNumbers = (arr) => {
//   return arr.map((item) => item * 2);
// };

// 2) Take an array of numbers and make them strings**

let arrayNumbers = [2, 5, 100];

let stringItUp = arrayNumbers.map(function (arrayNum) {
  return arrayNum + "";
});

console.log(stringItUp); // ["2", "5", "100"]

// 3) Capitalize each of an array of names**

function capitalizeNames(names) {
  return names.map(function (name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
}
//These names are in an object?
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings of the names**

// function namesOnly(names) {
//   return names.map(function (name) {
//     return name + this.name;
//   });
// }

const namesOnly = (arr) => {
  return arr.map((name) => name.name);
};
//These names are in an object called namesOnly
console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix**

function makeStrings(names) {
  return names.map(function (name) {
    if (name.age > 50) {
      return name.name + " can go into the Matrix";
    } else return name.name + " is under age";
  });
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in `h1`s, and the ages in `h2`s**

function readyToPutInTheDOM(items) {
  return items.map(function (item) {
    return "<h1>" + item.name + "</h1>" + "<h2>" + item.age + "</h2>";
  });
}
console.log(
  readyToPutInTheDOM([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
