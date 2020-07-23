import React, { Component } from 'react';
import { Route, NavLink, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import HomePage from './homepage.js';
import Login from './login.js';
import Signup from './signup.js';
import AddRecipes from './addrecipes.js';
import Logo from '../sections/logo';
import MyRecipes from './myrecipes.js';
import Cookies from 'js-cookie';
 
export default class Navigation extends Component {
    constructor(props) {
        super(props)
        Cookies.get("username")
        this.state = {
           login: false
           
            
    }
    this.handleLogout = this.handleLogout.bind(this)
    
}
componentWillUpdate() {
    if (Cookies.get("username")) {
        this.setState({
            login: true
        })
    }
}
componentWillMount() {
    if (!Cookies.get("username")) {
        this.setState({
            login: false
        })
    } else {
        this.setState({
            login: true
        })
    }
}
handleLogout() {
    this.setState({ login: this.state.login})
    Cookies.remove("username")
    window.location.href=("/")
}


render() {
   const loginNav =
   <ul>
        <li>
            <NavLink exact to="/">{<Logo/>}</NavLink>
        </li>
        <li>
            <NavLink to="/addrecipes">Add Recipes</NavLink>                        
        </li>
        <li>
            <NavLink to="/myrecipes">My Recipes</NavLink>
        </li>
        <button onClick={this.handleLogout}>Log Out</button>
    </ul>
    const logoutNav =
    <ul>
        <li>
            <NavLink exact to="/">{<Logo/>}</NavLink>
        </li>
        <li>
            <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
            <NavLink to="/login">Log In</NavLink>
        </li>
    </ul>
    return (
        <div className='nav-link-wrapper'>
    
            <BrowserRouter>
                {!this.state.login ? logoutNav : loginNav }
               
            
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
