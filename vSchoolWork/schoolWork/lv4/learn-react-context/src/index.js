import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContext from "./themeContext"




ReactDOM.render(
  // Wrapping our app in the provider, needs to have a prop value, 
  <ThemeContext.Provider value={"dark"}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById('root')
);


