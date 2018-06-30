import React, { Component } from 'react';
import './App.css';
import TrelloContainer from './components/trelloContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1 className={"header"}>Trello clone</h1>
        </div>
        <TrelloContainer/>
      </div>
      
    );
  }
}

export default App;
