import React, { Component } from 'react';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import Routes from './services/routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes/>
        <Footer/>       
      </div>
    );
  }
}

export default App;