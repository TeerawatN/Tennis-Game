import React from 'react';
import logo from './assets/images/bg.svg';
import './App.css';
import Board  from './containers/Board';

function App() {
  function addPoint(){
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Tennis game</h3>
        <Board />
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
