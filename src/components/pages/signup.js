import React, { Component } from 'react';
import Header from '../sections/header.js';
import Footer from '../sections/footer.js';

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            authentication: "login",
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            email: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleChange() {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSignup = event => {
        event.preventDefault()
        console.log(this.state)
    }
    handleClick() {
        this.setState({
            authentication: this.state.authMethod === "login" ? "signup" : "login", 
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: ""
        })
    }
    render() {
        return (
            <div className='signup-wrapper'>
                <Header />
               <form className='form-wrapper'>
                   <input name="firstName" 
                          type="text" 
                          placeholder="First Name" 
                          value={this.state.firstName} 
                          onChange={this.handleChange}>
                   </input>
                   

                   <input name="lastName" 
                          type="text" 
                          placeholder="Last Name" 
                          value={this.state.lastName} 
                          onChange={this.handleChange}>
                   </input>
                  
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
                          onChange={this.handleChange}>
                   </input>
                  
                    
                   <input name="confirmPassword" 
                          type="password" 
                          placeholder="Confirm Password" 
                          value={this.state.confirmPassword} 
                          onChange={this.handleChange}>
                   </input>
                  
                   <button onClick={this.handleSignup}>Submit</button>
                   
               </form>
               <Footer />
            </div>
        )
    }
}