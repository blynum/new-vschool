const readline = require('readline-sync');

// Player information
let playerName = readline.question("Hey Mom, let's get out the door for a day of self-care! What's your non-mom name? ");
console.log("Hey " + playerName + "! Let's get your purse and go have fun! ")
let playerHP = 100;
const inventory = ["water", "cellphone"];

// Enemies
const enemies = ['child', 'chore', 'husband'];

function getRandomEnemyName() {
    return enemies[Math.floor(Math.random() * enemies.length)];
}

function getRandomDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem() {
    const items = ['fun', 'peace', 'hobby piece'];
    return items[Math.floor(Math.random() * items.length)];
}

function printStatus() {
    console.log(playerName + " - HP: " + playerHP);
    console.log("Inventory: " + inventory.join(', '));
    //random change
}

// Game loop
while (playerHP > 0) {
    console.log("You are currently in the hallway. You can (w)alk or (p)rint status.");

    const action = readline.question("What would you like to do? ");

    if (action === 'w') {
        const shouldAttack = Math.random() < 0.5; // 50% chance of encountering an enemy

        if (shouldAttack) {
            const enemyName = getRandomEnemyName();
            console.log("Oh no! A wild " + enemyName + " has appeared!");

            while (playerHP > 0) {
                const attackOrRun = readline.question("Do you want to (h)andle now or (a)ddress late? ");

                if (attackOrRun === 'h') {
                    const playerDamage = getRandomDamage(20, 45); // calulates the damage the player deals the enemy and returns a random number between 20 and 45
                    const enemyDamage = getRandomDamage(20, 45); // calualates the damage the enemy deals the player and returns a random number between 20 and 45

                    console.log("You addressed the " + enemyName + " for " + playerDamage + " damage.");
                    console.log("The " + enemyName + " distracted you: " + enemyDamage + " damage.");

                    playerHP -= enemyDamage;

                    if (playerHP <= 0) {
                        console.log("You were distracted by the " + enemyName + "!");
                    } else {
                        const item = getRandomItem();
                        inventory.push(item);
                        console.log("You handled the " + enemyName + " and found a " + item + ".");
                        playerHP += 20; // Award player with HP; adds the players health points and updates the players health accordingly
                    }

                    break;
                } else if (attackOrRun === 'a') {
                    if (Math.random() < 0.5) {
                        console.log("You successfully handled the situation!");
                        break;
                    } else {
                        console.log("You failed to escape and got pulled in!");
                        const enemyDamage = getRandomDamage(20, 45);
                        console.log("The " + enemyName + " attacks you for " + enemyDamage + " damage.");
                        playerHP -= enemyDamage; //substracts enemy damage from player health points with the compound assignment operation
                    }
                }
            }
        }
    } else if (action === 'p') {
        printStatus();
    }
}

// Game Over
console.log("Game Over! Thanks for playing, " + playerName + "!");
