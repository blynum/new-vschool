import React from "react"
import './App.css';
import RoundedImg from "./RoundedImg";

function App() {
  return (
    <div className="App">
      <h1>defaultProps and propTypes Practice</h1>
      <RoundedImg src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg" borderRadius="10px" />
    </div>
  );
}

export default App;
