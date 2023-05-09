import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, I am Dennis Yen
        </p>
        <a
          className="App-link"
          href="../public/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </a>
      </header>
    </div>
  );
}

export default App;
