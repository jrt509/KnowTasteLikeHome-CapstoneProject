import React, { Component } from 'react';
import Header from '../sections/header.js';
import Footer from '../sections/footer.js';


export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }   
    render() {
        return (
            <div className='login-wrapper'>
                <input name="userName" 
                          type="text" 
                          placeholder="Username" 
                          value={this.state.userName} 
                          onChange={this.handleChange}>
                   </input>
                  
                   
                   <input name="password" 
                          type="password" 
                          placeholder="Password" 
                          value={this.state.password} 
                          onChange={this.handleChange}></input>
            </div>
        )
    }
}