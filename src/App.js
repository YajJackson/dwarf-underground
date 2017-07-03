import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Main from './components/main/main'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />

        <footer className="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 className="float-right">All rights reserved</h6>
        </footer>
      </div>
    );
  }
}

export default App;
