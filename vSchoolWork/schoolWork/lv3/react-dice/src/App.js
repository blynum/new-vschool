import React from "react"
import './App.css';
import DiceBox from "./DiceBox"

function App() {

  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5])

  const arrayOfNumbers = numbers.map((number, index) =>
    <DiceBox
      key={index}
      number={number}
    />
  )

  function generateRandomNumber() {
    return Math.floor(Math.random() * 6 + 1)
  }
  // console.log(generateNumbersArray())

  const rollDice = () => {
    // passing in new state
    // setNumbers([
    //   generateRandomNumber(),
    //   generateRandomNumber(),
    //   generateRandomNumber(),
    //   generateRandomNumber(),
    //   generateRandomNumber(),
    // ])

    //1. passing in callback function 

    setNumbers((prevNumbers) => {
      return prevNumbers.map((number) => generateRandomNumber())
    })
  }



  return (
    <div className="App">
      <header>React Dice
        <button onClick={rollDice}>Get Random Numbers</button>
      </header>

      {/* <DiceBox number={numbers[0]} />
      <DiceBox number={numbers[1]} />
      <DiceBox number={numbers[2]} />
      <DiceBox number={numbers[3]} />
      <DiceBox number={numbers[4]} />
      <DiceBox number={numbers[5]} /> */}
      {arrayOfNumbers}

    </div>
  );
}

export default App;
