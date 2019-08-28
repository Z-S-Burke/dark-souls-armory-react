import React, { Component } from 'react';
import logo from './logo.png';
import title from './dark_souls_logo.png';
import './App.css';
import Armory from './Armory';
// import Armory from 'Armory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={title} className="App-title" alt="App-title" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-heading"> WEAPON LIST </h1>
        </header>
        <Armory displaytext="First Component Data" />
      </div>
    );
  }
}

export default App;

