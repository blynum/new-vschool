import React from 'react';
import './App.css';
import Card from './Card'

function App() {
  return (
    <div>
      <div>
        <Card cardColor="Red" height={200} width={300} />
        <Card cardColor="Blue" />
        <Card cardColor="Green" />
      </div>

    </div>
  );
}

export default App;
