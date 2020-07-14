import React, { Component } from 'react';
import Footer from '../sections/footer.js';
import Signup from '../pages/signup';




export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
    }
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

                <button type="submit" onClick={this.handleSubmit}>Log In</button>
                </div>
                
                <Footer />
                </div>
            </form>
           
               
                
                
        
        )
    }
}