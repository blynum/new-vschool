import React, { useState } from "react"
import './App.css';
import Square from "./Square"
import Player from "./Playbutton"



function App() {

  const [background, setBackground] = useState("blue")
  console.log(background)
  const [colors, setColors] = useState(["white", "white", "white", "white"])

  const arrayofSquares = colors.map((color, index) =>
    <Square
      key={index + color}
      background={color} />

  )



  const changeFirstSquare = () => {
    // 2 ways to change state
    // a. pass in a new state
    // setBackground("green")

    // b. check to see the previous state i.e. toggle between blue and green

    // if (background === "blue")
    //   setBackground("green")
    // else
    //   setBackground("blue")

    // pass in a callback function
    setBackground(prevBackground => {
      // if (prevBackground === "blue")
      //   return "green"
      // else
      //   return "blue"

      return prevBackground === "blue" ? "green" : "blue"
    })

  }

  const smallTimeDJ = () => {
    setColors(prevColors => {
      if (prevColors[0] === "white")
        return ["black", "black", "black", "black"]
      else
        return ["white", "white", "white", "white"]

    })
  }

  const partyDJ = () => {
    setColors(prevColors => {
      return ["purple", "purple", prevColors[2], prevColors[3]]

    })
  }

  const proDJLeft = () => {
    setColors(prevColors => {
      return [prevColors[0], prevColors[1], "blue", prevColors[3]]
    })

  }

  const proDJRight = () => {
    setColors(prevColors => {
      return [prevColors[0], prevColors[1], prevColors[2], "blue"]
    })
  }

  const bigDJOne = () => {
    setColors(prevColors => {
      return ["orange", prevColors[1], prevColors[2], prevColors[3]]
    })
  }
  const bigDJTwo = () => {
    setColors(prevColors => {
      return [prevColors[0], "pink", prevColors[2], prevColors[3]]
    })
  }
  const bigDJThree = () => {
    setColors(prevColors => {
      return [prevColors[0], prevColors[1], "red", prevColors[3]]
    })
  }
  const bigDJFour = () => {
    setColors(prevColors => {
      return [prevColors[0], prevColors[1], prevColors[2], "green"]
    })
  }



  return (
    <div className="App">
      <header>DJ React is Back
        <img src="https://timelinecovers.pro/facebook-cover/download/dj-board-facebook-cover.jpg" />
      </header>
      {/* <Square background={background} /> */}
      <Square background={colors[0]} />
      <Square background={colors[1]} />
      <Square background={colors[2]} />
      <Square background={colors[3]} />
      {/* {arrayofSquares} */}

      {/* <button onClick={changeFirstSquare}>Change first square</button> */}
      <button onClick={smallTimeDJ}>Small Time DJ</button>
      <button onClick={partyDJ}>Party DJ</button>
      <button onClick={proDJLeft}>Pro DJ Left</button>
      <button onClick={proDJRight}>Pro DJ Right</button>
      <button onClick={bigDJOne}>Big DJ One</button>
      <button onClick={bigDJTwo}>Big DJ Two</button>
      <button onClick={bigDJThree}>Big DJ Three</button>
      <button onClick={bigDJFour}>Big DJ Four</button>
      <Player />
    </div>
  );
}


export default App
