import React, { Component } from 'react';
import Footer from '../sections/footer.js';





export default class Login extends Component {
    constructor(props) {
        super(props)

        

        this.state = {
            
           
           
    }
    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
}
handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleLogin(event) {
    event.preventDefault()

    fetch("http://127.0.0.1:5000/user/verified", {
        
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                userName: this.props.userName,
                password: this.props.password
            })
        })
    .then(response => response.get.json())
    .then(data => console.log(data))
    .catch(error => {console.log(error)
       
    })
}

render() {
        return (
            
                
                <div className='login-wrapper'>
                
                <div className="input-wrapper">
                <input 
                    name="userName" 
                    type="text" 
                    placeholder="Username" 
                    value={this.props.userName} 
                    onChange={this.handleChange}>
                </input>
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    value={this.props.password} 
                    onChange={this.handleChange}>
                </input>

                <button onClick={event => window.location.href='/myrecipes'}>Log In</button>
                </div>
                
                <Footer />
                </div>
           
           
               
                
                
        
        )
    }
}