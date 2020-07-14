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
        console.log("title", "ingredients", "preperation")
        event.preventDefault()

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
                    <button onClick={this.props.handleSubmit}>Add</button>
                    
                
                </form>     
            <Footer /> 
             
            </div>
        )
    }
}