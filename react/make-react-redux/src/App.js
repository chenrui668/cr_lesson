import React from 'react';
import logo from './logo.svg';
import Context from './ContextDemo.jsx';
import Count from './Count.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Context />
      <Count />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
