import React from "react"
import FriendList from "./Component/FriendList"
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="app--header">My Friends with Pets</header>
      <FriendList />
    </div>
  );
}

export default App;
