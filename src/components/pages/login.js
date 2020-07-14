import React, { Component } from 'react';
import Footer from '../sections/footer.js';





export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
           
    }
    this.handleLogin = this.handleLogin.bind(this)
}
handleLogin() {
    event.preventDefault()
    fetch("http://127.0.0.1:5000/user/verification", {
            mode: "no-cors",
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                userName: this.props.userName,
                password: this.props.password
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

render() {
        return (
            <form onSubmit={this.handleSubmit}>
                
                <div className='login-wrapper'>
                
                <div className="input-wrapper">
                <input 
                    name="userName" 
                    type="text" 
                    placeholder="Username" 
                    value={this.props.userName} 
                    onChange={this.props.handleChange}>
                </input>
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    value={this.props.password} 
                    onChange={this.props.handleChange}>
                </input>

                <button type="submit" onClick={this.handleLogin}>Log In</button>
                </div>
                
                <Footer />
                </div>
            </form>
           
               
                
                
        
        )
    }
}