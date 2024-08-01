import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


/* ReactDOM.render(
  <React.StrictMode>
    <App
    // darkMode={false} 
    />
  </React.StrictMode>,
  document.getElementById('root')
); */

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(<App />)
