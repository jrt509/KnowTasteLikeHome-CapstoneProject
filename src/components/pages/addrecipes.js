import React, { Component } from 'react'
import Footer from '../sections/footer'
import Signup from '../pages/signup'


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
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleAddRecipe = event => {
        event.preventDefault()
        fetch("http://127.0.0.1:5000/recipe/add", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({ 
                title: this.state.title,
                ingredients: this.state.ingredients,
                preperation: this.state.preperation
            })
            
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))   
    }
    

    render() {
        return (
            <div className='add-recipe-page-wrapper'>
                <form onSubmit={this.props.handleSubmit} className="content-wrapper">
                
               
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
                    <button type="submit" onClick={this.handleAddRecipe}>Add</button>
                    
                
                </form>     
            <Footer /> 
             
            </div>
        )
    }
}