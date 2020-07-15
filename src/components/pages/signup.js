import React, { Component } from 'react';
import Footer from '../sections/footer.js';




export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: ""
        }
       
       
        this.handleChange = this.handleChange.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
       
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignup = (event) => {
        event.preventDefault(event)
        
        fetch("http://127.0.0.1:5000/user/add", {
            mode: "no-cors",
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
        window.location.href='/login'
    }
        
    render() {
        return (
            <div className='signup-wrapper'>
               
                   <div className='form-wrapper'>
                   <input name="firstName" 
                          type="text" 
                          placeholder="First Name" 
                          value={this.state.firstName} 
                          onChange={this.handleChange}
                          
                          >
                   </input>
                   

                   <input name="lastName" 
                          type="text" 
                          placeholder="Last Name" 
                          value={this.state.lastName} 
                          onChange={this.handleChange}
                          
                          >
                   </input>
                  
                   <input name="userName" 
                          type="text" 
                          placeholder="Username" 
                          value={this.state.userName} 
                          onChange={this.handleChange}
                          
                          >
                   </input>
                  
                   
                   <input name="password" 
                          type="password" 
                          placeholder="Password" 
                          value={this.state.password} 
                          onChange={this.handleChange}
                          
                          >
                   </input>
                  
                   <button onClick={this.handleSignup}>Submit</button>
                   </div>
               <Footer />
            </div>
        )
    }
}