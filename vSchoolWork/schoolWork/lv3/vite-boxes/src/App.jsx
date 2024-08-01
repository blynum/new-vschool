import { useState } from "react";
import boxes from "./boxes";
import Box from "./Box";
import "./App.css";

function App(){
  const [squares, setSquares] = useState(boxes);

  function toggle(id) {

  //imperative code 

/*     setSquares((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares; */

      //declarative code
      setSquares((prevSquares) => {
        return prevSquares.map((square) => {
            return square.id === id ? {...square, on: !square.on} : square
        })
    })
}
  


  const squareArray = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} 
    />
  ));

  return (
    <div className="App">
      <h1>Box Challenge 1</h1>
      <div className="box-container">{squareArray}</div>
    </div>
  )
}


export default App;
