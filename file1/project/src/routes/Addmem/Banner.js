import React, { Component } from 'react';
import logo from './logo.png';
import add_mem from './add_mem.png'

import './App.css';
class Banner extends Component {
  render() {
    return (
      <div className="App">
      <div className="New">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>

        <img src={add_mem} className="Add-Mem" alt="add_mem" />
        <p>Add new Client</p>
        </div>
      </div>
    );
  }
}
export default Banner;
