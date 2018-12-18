import React, { Component } from 'react';
import './App.css';
import WorldMap from './containers/WorldMap';
import Menu from './containers/Menu';

class App extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <WorldMap/>
      </div>
    );
  }
}

export default App;
