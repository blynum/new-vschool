import React from "react"
import './App.css';
import boxes from "./boxes"
import Box from "./Box"


function App() {
  const [squares, setSquares] = React.useState(boxes)

  const squareArray = squares.map(square => (
    <Box
      key={square.id}
      on={square.on}
    />
  ))

  return (
    <div className="App">
      Box Challenge 2, 3.1 - Local State
      {squareArray}
    </div>
  );
}

export default App;
