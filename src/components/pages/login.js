import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Footer from '../sections/footer.js';


export default class Login extends Component {
    constructor(props) {
        super(props)

        if (Cookies.get("username")) {
            window.location.href="/addrecipes"
        }

        this.state = {
           errorText: "Login",
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
    })
}

handleLogin(event) {
    event.preventDefault()
    Cookies.get("username")
    if (this.state.username === "" || this.state.password === "") {
        this.setState({ errorText: "All fields are required" })
    } else {
        fetch("https://know-taste-like-home-back-jrt.herokuapp.com/user/verified", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
        })
        .then(response => {
           return response.json()
        })
        .then(data => {
            
           console.log(data)
          
            if (data === "User NOT Verified") {
                this.setState({ errorText: "User NOT Verified" })
            }
            else  {
                
                this.setState({ errorText: "Logging in..."})
                Cookies.set("username", this.state.username)
                window.location.reload()
                
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
        <div className="login-wrapper">
            <div className="input-wrapper">
                <input 
                    id="username-input"
                    name="username" 
                    type="text" 
                    placeholder="Username" 
                    value={this.state.username} 
                    onChange={this.handleChange}
                />
                <input 
                    id="password-input"
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                />
                    
                <button style={{color: "darkred", fontWeight: "bold"}} onClick={this.handleLogin}>{this.state.errorText}</button>
                
            </div>         
            <Footer />      
        </div>
    )
}
}