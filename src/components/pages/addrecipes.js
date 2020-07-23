import React, { Component } from 'react'
import Footer from '../sections/footer'
import Cookies from 'js-cookie';

export default class  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            ingredients: "",
            preperation: "",
            username: "",
            errorText: "Add Recipe"
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
        Cookies.get("username")
        this.setState({
            username: Cookies.get("username"),
            errorText: "Sending recipe"
        })
        if (this.state.title === "" || this.state.ingredients === "" || this.state.preperation === ""){
            this.setState({ errorText: "All fields are required"})
        } else {
        fetch(`https://know-taste-like-home-back-jrt.herokuapp.com/recipe/add`, {
            
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({ 
                title: this.state.title,
                ingredients: this.state.ingredients,
                preperation: this.state.preperation,
                username: Cookies.get("username")
            })
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                title: "",
                ingredients: "",
                preperation: "",
                errorText: "Recipe Added!"
            })
            
        }).then(
            this.setState({
                errorText: "Add Recipe"
            })
        )
        
        .catch(error => {
            console.log(error)
            this.setState({
                errorText: "..."
            })
        })
    }
}

    render() {
        return (
            <div className='add-recipe-page-wrapper'>
                
                <div className="content-wrapper">

                    <input 
                        name="title" 
                        type="text" 
                        placeholder="title ie: Banana Banana Bread" 
                        value={this.state.title}
                        onChange={this.handleChange}>
                    </input>

                    
                    <textarea 
                        name="ingredients" 
                        type="text" 
                        placeholder="enter ingredients ie: 2 cups all-purpose flour,  
                        1 teaspoon baking soda,
                        ¼ teaspoon salt,
                        ½ cup butter,  
                        ¾ cup brown sugar,
                        2 eggs, beaten,
                        2 ⅓ cups mashed overripe " 
                        value={this.state.ingredients}
                        onChange={this.handleChange}>
                    </textarea>
                    

                    <textarea 
                        name="preperation" 
                        type="text" 
                        placeholder="enter preperation ie: Step 1: Preheat oven to 350 degrees F (175 degrees C). 
                         Step 2: In a large bowl, combine flour, baking soda and salt. In a separate bowl, cream together butter and brown sugar. Stir in eggs and mashed bananas until well blended. 
                        Step 3: Bake in preheated oven for 60 to 65 minutes..." 
                        value={this.state.preperation}
                        onChange={this.handleChange}>
                    </textarea>
                    
                    <button 
                        type="submit" 
                        style={{color: "darkred", fontWeight: "bold", marginTop: 10}} 
                        onClick={this.handleAddRecipe}
                        className="add-btn"
                    >
                        {this.state.errorText}
                    </button>
                </div>     
                <Footer /> 
            </div>
        )
    }
}