// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="root">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
