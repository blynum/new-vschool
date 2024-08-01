// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

// let welcome = "hello"
// console.log(welcome)

function capLow(greet) {
    return greet.toUpperCase().concat(greet.toLowerCase())
}
console.log(capLow("heLLo"))

function foo(str) {
    return str.toUpperCase() + " " + str.toLowerCase()
}

console.log(foo("hello", "hello"))

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

function findMiddleIndex(str2) {
    //Calulate half the length of hte string and round down
    let halfLength = Math.floor(str2.length / 2);
    return halfLength;

}

console.log(findMiddleIndex("Hello"))
console.log(findMiddleIndex("Hello World"))

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.


function returnFirstHalf(str3) {
    return str3.slice(0, Math.floor(str3.length / 2))
}


console.log(returnFirstHalf("Hello")) // => "He"
console.log(returnFirstHalf("Hello World")) // => "Hello")

//Write a function that takes a string as a parameter and capitalizes any character that follows a space.

function capitalize(str4) {
    let words = str4.split(' '); //Split the string into an array of words
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) { //Check if the word is not empty
            words[i] = words[i][0].toUpperCase() + words[i].substring(1); //Capitalize the first letter
        }
    }
    return words.join(' '); //Join the words back into a single string
}

function capitalize2(str5) {
    let words = str5.split(' '); // Split the string into an array of words
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) { // Check if the word is not empty
            words[i] = words[i][0].toUpperCase() + words[i].substring(1); // Capitalize the first letter
        }
    }
    return words.join(' '); // Join the words back into a single string
}


console.log(capitalize("hey friends! practice practice practice!"))
console.log(capitalize2("hey girls! sing sing sing!"))