import React, { Component } from 'react';
import Footer from '../sections/footer.js';




export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            
    }
    this.handleChange = this.handleChange.bind(this)
    
}
handleLogin = event => {
    event.preventDefault()
    
    console.log(this.state.userName)
    console.log(this.state.password)
}

handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
        })
    } 

    render() {
        return (
            
            <div className='login-wrapper'>
                <div className="input-wrapper">
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
                <button onClick={this.handleLogin}>Log In</button>
                </div>
               
                <Footer />
                
            </div>
        )
    }
}