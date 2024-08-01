import React from "react"
import './App.css';
import Header from "./Header"
import Body from "./Body"

function App() {
  const [user, setUser] = React.useState("Joe")


  return (
    <div className="App">
      <Header user={user} />
      <Body user={user} />
    </div>
  );
}

export default App;
