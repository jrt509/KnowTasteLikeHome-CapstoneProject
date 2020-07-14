import React, { Component } from 'react'
import Footer from '../sections/footer'

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            ingredients: "",
            preperation: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAddRecipe = this.handleAddRecipe.bind(this)
        
    }
    handleAddRecipe = event => {
        event.preventDefault()

        fetch("http://127.0.0.1:5000/user/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                title: this.state.title,
                ingredients: this.state.ingredients,
                preperation: this.state.preperation,
                
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
            this.setState({ error: "fetch error"})
        })
    }
    
    

   
    handleChange(event) {
        this.setState({ 
            [event.target.name]: event.target.value
    })
}
    render() {
        return (
            <div className='add-recipe-page-wrapper'>
                <div className="content-wrapper">
                    <input 
                        name="title" 
                        type="text" 
                        placeholder="title" 
                        value={this.state.title}
                        onChange={this.handleChange}>
                    </input>
                
                    <textarea 
                        name="ingredients" 
                        type="text" 
                        placeholder="enter ingredients" 
                        value={this.state.ingredients}
                        onChange={this.handleChange}>
                    </textarea>

                    <textarea 
                        name="preperation" 
                        type="text" 
                        placeholder="enter preperation" 
                        value={this.state.preperation}
                        onChange={this.handleChange}>
                    </textarea>
                    <button onClick={this.props.handleSignup}>Add</button>
                </div>
               
            <Footer />    
            </div>
        )
    }
}