// Wait for user's response
const readlineSync = require("readline-sync");

// Wait for user's response.
userName = readlineSync.question("May I have your name? ");
console.log(
  "Welcome " +
  userName +
  "! . Your training will now start.  Press w to begin walking"
);

// Starting Line
const user = {
  name: " ",
  alive: true,
  items: ["water", "pokedex"],
  hp: 100,
  ap: 10,
};

const char = {
  name: "Charizard",
  loot: "fire-stick",
  ap: 10,
  hp: 100,
};

const luc = {
  name: "Lucario",
  loot: "metal coat",
  ap: 10,
  hp: 100,
};

const jig = {
  name: "JigglyPuff",
  loot: "mic",
  ap: 10,
  hp: 100,
};

// function Enemy(name, loot, ap){
//     this.name = name,
//     this.loot = loot,
//     this.ap = ap
// }

// Enemy.prototype.attack(){

// }

// At a random time enemies will appear and attack
function meetEnemy() {
  const enemies = [char, luc, jig];
  return enemies[Math.floor(Math.random() * enemies.length)];
}

function walk() {
  const odds = Math.random();
  if (odds > 0.5) {
    console.log("Whistle while you walk");
  } else {
    enemyAttack();
  }
}

// var enemy = null;
const chanceOfNewEnemy = 0.5;
// function enemyAttack(){}
function enemyAttack() {
  var enemy = meetEnemy();
  meetEnemy === null && Math.random() < chanceOfNewEnemy;
  console.log(enemy.name, "attacked");
  //   gatherLoot(enemy.loot);
}

// Show hp amount and inventory
function printStatus() {
  console.log("Name:" + userName, "Hp: " + user.hp, "Inventory: " + user.items);
}

function gatherLoot(item) {
  console.log(item);
  return user.items.push(item);
}

function hPoints(enemy) {
  while (user.hp > 10 && enemy.hp > 10) {
    console.log(
      "You have taken damage of: " +
      Math.floor(Math.random() * enemy.ap) +
      " points"
    );
    user.hp = user.hp - Math.floor(Math.random() * enemy.ap);
    console.log(
      "Enemy has taken damage of: " +
      Math.floor(Math.random() * user.ap) +
      " points"
    ); // random amount damage
    enemy.hp = enemy.hp - Math.floor(Math.random() * user.ap);
  }
  if (enemy.hp < 10) {
    console.log("You won! Collect ");
    gatherLoot(enemy.loot);
  } else {
    console.log("You lost");
    user.alive = !user.alive;
  }
  // write a function where user.hp is decreased by enemyAttack
}

while (user.alive) {
  const userSelect = readlineSync.keyIn("[w]walk,[p]status,[q]quit,[a]attack", {
    limit: "wpqa",
  });
  if (userSelect == "w") {
    walk();
  } else if (userSelect == "q") {
    console.log("You're a punk");
    process.end;
    break;
  } else if (userSelect == "a") {
    console.log("You attacked");
    hPoints(meetEnemy());
  } else if (userSelect == "p") {
    console.log("Status");
    printStatus();
  }
}

// user.hp =

// if
// "w" key was pressed
// console.log('walking');

// User Presses "w" and get console.log "walking"
// document.addEventListener('keydown', logKey);
// function logKey(e) {
// console.log(e.key);
// if(e.key=="w")console.log("gotcha!");
// }

// while(user presses "w" walking will continue to show)

// while(stillWalk === pressing the "w"){
// const stillWalk = console.log('still walking')
// }

// function getRandomNum(max) {
//     return Math.floor(Math.random() * max);
// }

// console.log(getRandomNum(3));

// user will be given the option to attack or run
// const userAction = [attack, run]
// if(){

// }
// if(){

// }

// }

// If player kills the enemy give player some HP and special item. *Should use a while loop

// If player dies,
