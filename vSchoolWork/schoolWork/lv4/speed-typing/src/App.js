import React, { useState } from "react"
import './App.css';

function App() {
  const [text, setText] = useState("")

  function handleChange(e) {
    const { value } = e.target
    setText(value)
  }

  function wordCount(textCount) {
    const wordsArr = textCount.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length

  }

  return (
    <div className="App">
      <h1>
        Speed Typing Game
      </h1>
      <textarea
        onChange={handleChange}
        value={text}

      />
      <h4>Time Remaining: ???</h4>
      <button onClick={() => console.log(wordCount(text))}>Start</button>
      <h1>Word Count: ???</h1>
    </div>
  );
}

export default App;
