// All the imports
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import PhotoContainer from './components/PhotoContainer';
import apiKey from './config.js';

// Storing the apiKey into a variable
const api = apiKey

// The top level component
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: []
    }
  }

  // Lifecycle method
  componentDidMount() {
    axios.get(api)
      .then((res) => {
        this.setState({
          photos: res.data
        });
      })
      .catch(function (error) {
        console.log('Error fetching data from flickr', error);
      })
  }

  render() {
    console.log(this.state.photos);
    return (
      <div className="container">
        <Header />
        <PhotoContainer />
      </div>
    );
  }
}
