import React, { useState, useEffect } from 'react';
import Color from './Components/Color';
import './App.css';
const axios = require('axios');

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('#FFFFFF'); // Default color

  const change = () => {
    setCount(prevCount => prevCount + 1);
  }

  useEffect(() => {
    const fetchRandomColor = async () => {
      try {
        const response = await axios.get('https://random-color.onrender.com/colors/random');
        const randomColor = response.data; // Assuming response data is a single color object
        setColor(randomColor.hex);
      } catch (error) {
        console.error('Error fetching random color:', error);
        // Optionally handle error state or display a message to the user
      }
    };

    fetchRandomColor();
  }, [count]);

  return (
    <div className="App">
      <div className="box">
        <Color color={color} />
      </div>
      <div>Random Color Generator</div>
      <button className="btn" onClick={change}>Change!</button>
    </div>
  );
}

export default App;
