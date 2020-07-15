import React, { Component } from 'react';
import HomePage from './pages/homepage.js';
import Login from './pages/login.js';
import Signup from './pages/signup.js';
import Navigation from './pages/navigation.js';
import AddRecipes from './pages/addrecipes.js';
import MyRecipes from './pages/myrecipes.js';



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        
       <Navigation />
       

             
      </div>
    );
  }
}
