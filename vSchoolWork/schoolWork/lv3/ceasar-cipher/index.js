
/** var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
console.log(input)
var shift = parseInt(readline.question('How many letters would you like to shift? '))


let alphabet = "abcdefghijklmnopqrstuvwxyz";
let newAlpha = letterArr.split('');

const cipher = (input, shift) => {
    // Takes user input as a string and changes it to an array.
    const inputText = input.split('')
    // Map user inputArr and encrypt inputText by each letter that matches a letter in the letterArr
    const encryptedText = inputText.map(letter => {
        // check if letter is in the letter arr and
        const checkLetter = newAlpha.some(item => item === letter)
        if (letter === ' ') {
            return 32
        } else if (checkLetter === true) {
            return letter.charCodeAt() + shift
        } else {
            return letter.charCodeAt()
        }
    })
    // Maps array and turns the character code back to the character
    const hideText = encryptedText.map(letter => {
        if (letter > 122) {
            letter = letter - 26
        }
        return String.fromCharCode(letter)
    })
    // Joins the letters back to one string
    const hiddenText = hideText.join('')
    // Returns the ciphered phrase
    return hiddenText
}
console.log(cipher(input, shift)) **/
const cipher = (input, shift) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputText = input.toLowerCase(); // Convert input to lowercase

    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];

        if (char === ' ') {
            encryptedText += ' ';
            continue;
        }

        let currentIndex = alphabet.indexOf(char);
        if (currentIndex !== -1) { // If character is in alphabet
            let newIndex = (currentIndex + shift) % 26; // Calculate new index with wrap-around
            if (newIndex < 0) {
                newIndex += 26; // Ensure positive index
            }
            encryptedText += alphabet[newIndex]; // Append encrypted character
        } else {
            // If character is not in alphabet (e.g., punctuation), keep it unchanged
            encryptedText += char;
        }
    }

    return encryptedText;
};

// Example usage:
var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ');
var shift = parseInt(readline.question('How many letters would you like to shift? '));

console.log(cipher(input, shift));
