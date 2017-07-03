import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
