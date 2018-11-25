import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WorldMap from './containers/WorldMap';

require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div>
        <WorldMap/>
      </div>
    );
  }
}

export default App;
