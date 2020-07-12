import React from 'react';
import { Route, NavLink, BrowserRouter, Switch } from 'react-router-dom';
import HomePage from './homepage.js';
import Login from './login.js';
import Signup from './signup.js';
import Recipes from './recipes.js';
import Logo from '../sections/logo'
;

export default function navigation(props) {


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
                        <NavLink to="/recipes">Recipes</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/recipes" component={Recipes}/>
                </Switch>
            
            </BrowserRouter>
        </div>
    )
}