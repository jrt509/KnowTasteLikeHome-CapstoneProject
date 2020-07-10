import React, { Component } from 'react';
import HomePage from './pages/homepage.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        
        <HomePage />
             
      </div>
    );
  }
}
