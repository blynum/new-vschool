import React, { useEffect } from "react"
import './App.css';

function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  /**
     * Quiz:
     * 1. What will happen if I put back our Star Wars API call
     *    into the effect function? It keeps running the effect?
     * 2. How will the useEffect be different if I use 
     *    setStarWarsData() instead of console.log()? It updates states and will rendering the 
     * 3. What SHOULD be in our dependencies array in this case?
     */

  /**
    * Challenge: Combine `count` with the request URL
    * so pressing the "Get Next Character" button will
    * get a new character from the Star Wars API.
    * Remember: don't forget to consider the dependencies
    * array!
    */

  useEffect(() => {
    console.log("Effect Ran")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      //  This updates the state with our data
      .then(data => setStarWarsData(data))

  }, [count])
  // }, [])


  return (
    <div className="App">
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Generate Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>



    </div>
  );
}

export default App;
