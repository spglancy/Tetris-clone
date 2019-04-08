import React, { Component } from 'react'
import { createStore } from 'redux'

import { Provider } from 'react-redux'

import reducers from './reducers'
import GridBoard from './components/gridBoard'
import NextBlock from './components/nextBlock'
import ScoreBoard from './components/scoreboard'
import Controls from './components/controls'
import MessagePopup from './components/messagePopup'

import './App.css';

const store = createStore(reducers)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Tetris Redux</h1>
          </header>
          <GridBoard />
          <NextBlock />
          <ScoreBoard />
          <Controls />
          <MessagePopup />
        </div>
      </Provider>
    )
  }
}

export default App;