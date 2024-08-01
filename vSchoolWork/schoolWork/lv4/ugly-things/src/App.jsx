// src/App.jsx
import React from "react";
import { UglyThingsProvider } from "./UglyThingsContext";
import Form from "./Form";
import UglyThingsList from "./UglyThingsList";
import "./App.css";

function App() {
  return (
    <UglyThingsProvider>
      <div className="App">
        <h1>Ugly Things</h1>
        <Form />
        <UglyThingsList />
      </div>
    </UglyThingsProvider>
  );
}

export default App;
