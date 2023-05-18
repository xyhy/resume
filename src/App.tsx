import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          顏浩昀
        </h1>
        <main>
        <a
          className="App-link"
          href="../public/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </a>
        </main>
      <ScrollToTop />
      </header>

    </div>
  );
}

export default App;
