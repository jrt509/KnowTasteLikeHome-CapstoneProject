import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Footer from '../sections/footer.js';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
           errorText: "",
           username: "",
           password: "",
           isLoggedIn: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    
}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
        errorText: " "
    })
}

handleLogin(event) {
    event.preventDefault()
    if (this.state.username === "" || this.state.password === "") {
        this.setState({ errorText: "All fields are required" })
    } else {
        fetch("https://know-taste-like-home-back-jrt.herokuapp.com/user/verified", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
        })
        .then(response => {
            response.json()
        })
        .then(data => {
           
            if (data === "User NOT Verified") {
                this.setState({ errorText: "User NOT Verified" })
            }
            else {
                this.setState({ errorText: "User IS Logged In"})
                Cookies.set("username", this.state.username)
                this.props.history.push("/myrecipes")
            }
        })
        .catch(error => {
            console.log(error)
            this.setState({ errorMessage: "fetch error" })
        })
    }
}

render() {
    return (   
        <div className='login-wrapper'>
            <div className="input-wrapper">
            <input 
                name="username" 
                type="text" 
                placeholder="username" 
                value={this.state.username} 
                onChange={this.handleChange}
            />
            <input 
                name="password" 
                type="password" 
                placeholder="Password" 
                value={this.state.password} 
                onChange={this.handleChange}
            />
                
            <button onClick={this.handleLogin}>Log In</button>
            <p className="error-text">{this.state.errorText}</p>
            </div>         
            <Footer />      
        </div>
    )
}
}