class Player {
  constructor(
    name,
    totalCoins = 2,
    status = "Small",
    hasStar = false,
    gameActive = true
  ) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
    this.gameActive = gameActive;
  }
  setName(namePicked) {
    this.name = namePicked;
  }
  // setName() {
  //   if (10 * Math.random() < 5) {
  //     this.name = "Mario";
  //   } else {
  //     this.name = "Luigi";
  //   }
  // }

  gotHit() {
    if (this.status === "PoweredUp") {
      this.status = "Big";
    } else if (this.status === "Big") {
      this.status = "Small";
    } else if (this.status === "Small") {
      this.status = "Dead";
    } else if (this.status === "Dead") {
      this.gameActive = false;
    }
  }

  gotPoweredUp() {
    if (this.status === "Small") {
      this.status = "Big";
    } else if (this.status === "Big") {
      this.status = "PoweredUp";
    } else if (this.status === "PoweredUp") {
      this.hasStar = true;
    }
  }

  addCoin() {
    this.totalCoins++;
  }

  print(name, coins, status, star) {
    console.log(
      `Name: ${name}
       Total Coins: ${coins}
       Status: ${status}
       Star: ${star}`
    );
  }
}

// function randomNumber(multiplier) {
//   return Math.floor(Math.random() * multiplier);
// }

function gameOn() {
  const player1 = new Player();
  const names = ["Mario", "Lugui"];
  let randomNumber = Math.floor(Math.random() * 2);
  player1.setName(names[randomNumber]);
  console.log(randomNumber);

  var intervalID = setInterval(function () {
    const randomNumber2 = Math.floor(Math.random() * 3);
    console.log(randomNumber2);
    if (randomNumber2 === 0) {
      player1.gotHit();
      console.log("You Got Hit");
    } else if (randomNumber2 === 1) {
      player1.gotPoweredUp();
      console.log("You Powered Up");
    } else if (randomNumber2 === 2) {
      player1.addCoin();
      console.log("Adding Coins");
    } else {
      console.log("Error");
    }
    if (player1.status === "Dead") {
      clearInterval(intervalID);
      console.log("Game Over");
    }
    // print(player1);
    player1.print(
      player1.name,
      player1.totalCoins,
      player1.status,
      player1.hasStar
    );
  }, 1000);
}

gameOn();

// called inside of the setInternval

// instatiate a new player (using the new keyword)
// setInternal = a random number is chosen,  print function is called every
