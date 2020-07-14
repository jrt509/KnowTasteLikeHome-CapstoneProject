import React, { Component } from 'react';
import Footer from '../sections/footer.js';



export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
           
           
        }
       
       
        this.handleChange = this.handleChange.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignup = event => {
        event.preventDefault()
        console.log(this.state.firstName)
        console.log(this.state.lastName)
        console.log(this.state.userName)
        console.log(this.state.password)
        
    }
    handleSubmit(event) {
        event.preventDefault()
    } 
   
    
    render() {
        return (
            <div className='signup-wrapper'>
               <form onSubmit={this.handleSubmit} className='form-wrapper'>
                   
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
                  
                   <button type="submit"onClick={this.handleSignup}>Submit</button>
                   
               </form>
               <Footer />
            </div>
        )
    }
}