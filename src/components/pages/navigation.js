import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './homepage.js';
import Login from './login.js';
import Signup from './signup.js';
import AddRecipes from './addrecipes.js';
import Logo from '../sections/logo';
import MyRecipes from './myrecipes.js';




export default class Navigation extends Component {
    constructor(props) {
        super(props)

        
        this.state = {
            username: "",
            password: "",
           
    }
}  

render() {
  return (
        <div className='nav-link-wrapper'>
            
           
            <BrowserRouter>
            
                <ul>
                <Logo />    
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                    <li>
                     <NavLink to="/login">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addrecipes">Add Recipes</NavLink>                        
                    </li>
                    <li>
                        <NavLink to="/myrecipes">My Recipes</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/addrecipes" component={AddRecipes}/>
                    <Route path="/myrecipes" component={MyRecipes}/>
                </Switch>
            
            </BrowserRouter>
           
            </div>
            
        
    )}
}