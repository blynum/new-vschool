import React from "react"
import Joke from "./Components/Joke.js"
import jokesData from "./jokesData.js";
import './App.css';

function App() {
  const jokeElement = jokesData.map(joke => {
    // Joke Component
    return <Joke
      key={joke.index}
      setup={joke.setup} /*properites*/
      punchline={joke.punchline}
    />

  })
  return (
    <div>
      <h1>Jokes</h1>
      {jokeElement}
    </div>
  )
}

export default App;


{/* <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        upvote={6}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        upvote={3}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        upvote={9}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
        upvote={8}
      />
      <Joke
        punchline="It’s hard to explain puns to kleptomaniacs because 
        they always take things literally."
        upvote={4}
      /> */}
