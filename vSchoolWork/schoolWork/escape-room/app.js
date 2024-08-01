

// Starting Line 
var character = {
    alive: true,
    haveKey: false
}

var readlineSync = require ('readline-sync');
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
if (readlineSync.keyInYN('Would you like to Enter the Escape Room?')) {
    // 'Y' key was pressed.
    console.log('Entering the Escape Room...');
    // Do something...
  } else {
    // Another key was pressed.
    console.log ('End of Game')
    character.alive = false
    // Do something...
  }


function tryHole() {
    console.log('You Died from a poisionous snake bite')
    character.alive = false
}

function foundKey() {
    console.log("You found the key")
    character.haveKey = true
}

function openDoor(parameter) {
    if (parameter == false) {
        console.log("The door is locked")
    }
    else {
    console.log("You opened the door")
    character.alive = false
    }
}


// Dot Notation to access object properties
while (character.alive) {
    choices = ['Put hand in hole', 'Find the key', 'Open the door']
    index = readlineSync.keyInSelect(choices, 'Which would you like to do?');
    if (0 == index) {
        tryHole()
    } else if (1 == index) {
        foundKey()
    } else if (2 == index) {
        openDoor(character.haveKey)
    } else {
        console.log ('End of Game')
        character.alive = false
    }
}
