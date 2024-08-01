import React from "react"
import './App.css';

function App() {
  // array destructoring
  const [isImportant, setIsImportant] = React.useState(true)
  // console.log(isImportant)

  function handleClick() {
    setIsImportant(prevState => !prevState)
  }


  return (
    <div className="App">
      <h1 className="state--title">Is state important to know?</h1>
      <div className="state--value" onClick={handleClick}>
        <h1>{isImportant ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}

export default App;
