






// Loops through the following array and count how many "computer" there are. Log the final count

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for (var i = 0; i < officeItems.length; i++){
//     if (officeItems[i] === "computer") {
//         console.log(officeItems[i])
//     }
// }


// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "him"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "her"
    }
  ]

for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough")

    }

    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough" + " don't let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in")
    }
}

var arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Indexing and logging the inner [i] and outer [j] arrays
for (var i = 0; i < arrayOfArrays.length; i++) {      /* how many times will this loop run? = 3 times*/
    for (var j = 0; j < arrayOfArrays[i].length; j++){  /* how many times will this loop run? = 9 times */
        console.log(arrayOfArrays[i][j])

    }
}


// console.log the number 6

// console.log(arrayOfArrays[1][2])

// console.log the number 1
// console.log(arrayOfArrays[0][0])



// console.log the number 9
// console.log(arrayOfArrays[2][2])


