import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import PhotoContainer from './components/PhotoContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
