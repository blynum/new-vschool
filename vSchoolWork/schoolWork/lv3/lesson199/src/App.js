import React from "react"
import './App.css';

function App() {
  // const thingsArray = ["Thing 1", "Thing 2"]
  // thingsArray.map(function (thing) {
  //   return `<p>${thing}</p>`
  // })
  // const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  // function addItem() {
  //   const newThingText = `Thing ${thingsArray.length + 1}`
  //   thingsArray.push(newThingText) This is directly modifying state...don't do
  //   console.log(thingsArray)
  // }
  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

  function addItem() {
    const addItem = `Thing ${thingsArray.length + 1}`
    // using spread operator -----------------*
    setThingsArray(prevThingsArray => [...prevThingsArray, addItem])
  }
  // could use preState in place of preThingsArray

  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)




  return (
    <div className="App">
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

export default App;
