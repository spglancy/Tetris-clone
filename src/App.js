import React, { Component } from 'react';

import GridBoard from './components/gridBoard'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tetris Redux</h1>
        </header>
        <GridBoard />

      </div>
    );
  }
}

export default App;