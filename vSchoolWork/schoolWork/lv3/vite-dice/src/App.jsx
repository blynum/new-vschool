import { useState } from 'react'
import './App.css'
import DiceBox from './DiceBox'

function App() {
  const [numbers, setNumbers] = useState([1,2,3,4,5])

  const arrayOfNumbers = numbers.map((number, index) => 

  <DiceBox
    key={index}
    number={number}
  />
)


function generateRandomNumber(){
  return Math.floor(Math.random() * 6 + 1)
}

const rollDice = () => {

  setNumbers((prevNumbers) => {
    return prevNumbers.map(() => generateRandomNumber())
  })
}


  return (
    <div className="App">
      <header>React Dice
        <button onClick={rollDice}>Get Random Numbers</button>
      </header>

      {arrayOfNumbers}
    
    </div>
  );
}

export default App
