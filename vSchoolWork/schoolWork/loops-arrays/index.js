

// Loop through the following array and count how many "computers" there are.  Log the final count 

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]

for (var i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") {
    console.log(officeItems[i])
  }
}

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleArr = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  }, {
    name: "Madeline",
    age: 80,
    gender: "female"
  }, {
    name: "Cheryl",
    age: 22,
    gender: "female"
  }, {
    name: "Sam",
    age: 30,
    gender: "male"
  }, {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

for (var i = 0; i < peopleArr.length; i++) {
  if (peopleArr[i].age >= 18) {
    console.log("old enough");
  }
  else {
    console.log("not old enough");


  }
}

//Loop through the following array, and log to the console "hooray" for every party there is.
var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"]


//Loop through the following array, and count how many "trues" there are.
var booleans = [true, true, false, true, false, false, false]



//Add an isAdmin property to each of the users in this array.
var users = [
  {
    name: "Sophie",
    age: 12
  },
  {
    name: "Larry",
    age: 32
  },
  {
    name: "Cathy",
    age: 40
  }
]
//The light is off to start with. Log to the console whether or not the light is on at the end.

let lights = [2, 3, 2]


var arrayOfArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

for (var i = 0; i < arrayOfArrays.length; i++) {
  for (var j = 0; j < arrayOfArrays[i].length; j++) {
    console.log(arrayOfArrays[i][j])
  }
}

// 1. console.log the number 6 
console.log(arrayOfArrays[1][2])

//2. console.log the 9
console.log(arrayOfArrays[2][2])

//3. console.log the 1
console.log(arrayOfArrays[0][0])

