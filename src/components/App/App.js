import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import AllPets from '../AllPets/AllPets'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Pet Hotel</h1>
          <AllPets />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
