import React from "react"
import './App.css';
import Card from "./Card"

function App() {
  return (
    <div className="App">
      <Card cardColor="red" height={200} width={200} />
      <Card cardColor="purple" />
      <Card cardColor="green" />

    </div>
  );
}

export default App;
