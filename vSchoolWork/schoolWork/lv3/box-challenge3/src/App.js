import React from "react";
import './App.css';
import Box from "./Box"
import boxes from "./boxes"

function App() {
  const [squares, setSquares] = React.useState(boxes)

  function toggle(id) {
    console.log("clicked")
    setSquares(prevSquares => {
      // Imperative Coding 
      // const newSquares = []
      // for (let i = 0; i < prevSquares.length; i++) {
      //   const currentSquare = prevSquares[i]
      //   if (currentSquare.id === id) {
      //     const updatedSquare = {
      //       ...currentSquare,
      //       on: !currentSquare.on
      //     }
      //     newSquares.push(updatedSquare)
      //   } else {
      //     newSquares.push(currentSquare)
      //   }
      // }
      // return newSquares

      // Declarative Coding
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })
  }

  const squareArray = squares.map(square => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      // toggle={toggle}
      toggle={() => toggle(square.id)}
    />
  ))
  return (
    <div className="App">
      Box Challenge 3.2 - Unified State
      {squareArray}
    </div>
  );
}

export default App;
