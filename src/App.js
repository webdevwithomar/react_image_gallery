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
import Search from './components/Search'
import PhotoContainer from './components/PhotoContainer';
import Nav from './components/Nav';
import Nature from './components/Nature';
import Tree from './components/Tree';
import Mountain from './components/Mountain';
import apiKey from './config';
import NotFound from './components/NotFound';

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
          <Header />
          <Search searchPhoto={this.performSearch} />
          <Nav />
          <Switch>
            <Route path="/search/:name" render={() => <PhotoContainer gallery={this.state.photos} />} />
            <Route exact path="/" render={() => <Nature searchFor="nature" name="Nature" />} />
            <Route exact path="/nature" render={() => <Nature searchFor="nature" name="Nature" />} />
            <Route exact path="/tree" render={() => <Tree searchFor="tree" name="Tree" />} />
            <Route exact path="/mountain" render={() => <Mountain searchFor="mountain" name="Mountain" />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
