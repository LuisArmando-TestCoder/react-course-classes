import React, { Component } from 'react';
import Cards from './dynamicComponents/rickMorty';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Cards/>
      </div>
    );
  }
}

export default App;
