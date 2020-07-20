import React, { Component } from 'react'
import Footer from '../sections/footer.js'
import Cookies from 'js-cookie';

export default class Signup extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            errorText: " "
        }
       
        this.handleChange = this.handleChange.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: " "
        })
    }

    handleSignup(event)  {
        event.preventDefault(event)
        if (this.state.firstname === "" || this.state.lastname === "" || this.state.username === "" || this.state.password === "") {
            this.setState({ errorText: "All fields are required" })
        } else {
            fetch("http://127.0.0.1:5000/user/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    username: this.state.username,
                    password: this.state.password
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data === "Username Taken") {
                    this.setState({ errorText: "Sorry, this username is already taken" })
                }
                else {
                    this.setState({ errorText: "User created successfully" })
                    Cookies.set("username", this.state.username)
                    this.props.history.push("/login")
                }
            })
            .catch(error => {
                this.setState({
                    errorText: "Oops! Something went wrong"
                })
            })
        }
    }

    render() {   
        return (
             <div className='signup-wrapper'>
                <div className='form-wrapper'>
                   <input name="firstname" 
                          type="text" 
                          placeholder="First Name" 
                          value={this.state.firstname} 
                          onChange={this.handleChange}
                    />  
                        
                   <input name="lastname" 
                          type="text" 
                          placeholder="Last Name" 
                          value={this.state.lastname} 
                          onChange={this.handleChange}
                    />  
                          
                   <input name="username" 
                          type="text" 
                          placeholder="username" 
                          value={this.state.username} 
                          onChange={this.handleChange}
                    />  
                        
                   <input name="password" 
                          type="password"
                          placeholder="Password" 
                          value={this.state.password} 
                          onChange={this.handleChange}
                    /> 
                          
                   <p className="error-text">{this.state.errorText}</p>
                   <button onClick={this.handleSignup}>Submit</button>
                   
                </div>
               <Footer />
            </div>
        )
    }
}