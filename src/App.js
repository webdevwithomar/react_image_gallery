// All the imports
import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from './components/Header'
import PhotoContainer from './components/PhotoContainer';
import Nature from './components/Nature';
import Tree from './components/Tree';
import Mountain from './components/Mountain';
import apiKey from './config';

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

  performSearch = search => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&text=${search}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo
        })
      })
      .catch(function (error) {
        console.log('Error fetching data from flickr', error);
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header searchPhoto={this.performSearch} />

          <Switch>
            <Route path="/search" render={() => <PhotoContainer gallery={this.state.photos} />} />
            <Route exact path="/nature" render={() => <Nature searchFor="nature" name="Nature" />} />
            <Route exact path="/tree" render={() => <Tree searchFor="tree" name="Tree" />} />
            <Route exact path="/mountain" render={() => <Mountain searchFor="mountain" name="Mountain" />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
