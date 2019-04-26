import React, { Component } from 'react';
import logo from './logo.svg';
import './Reactlogo.css';

class Reactlogo extends Component {
  render() {
    return (
      <div className="App">


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-success">
            App.js and save to reload 666.
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
}

export default Reactlogo;
