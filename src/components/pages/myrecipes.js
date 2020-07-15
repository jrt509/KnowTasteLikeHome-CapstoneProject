import React, { Component } from 'react';
import Footer from '../sections/footer';
import AddRecipes from '../pages/addrecipes';


export default class MyRecipes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    
        this.handleGetAllRecipes = this.handleGetAllRecipes.bind(this)
    }
    
    handleGetAllRecipes() {
        
        fetch("http://127.0.0.1:5000/recipe/get", {
            method: "GET",
            header: {"Content-Type": "application/json"}})
        .then(response => response.json())
        .then(data => {
            this.setState({ data: data})
        })
        .catch(error => console.log(error)) 
        console.log(this.state.data)  
    }
    renderRecipes() {
        return (
            <div>
                {this.state.data.map(item => {
                    <p key={item.id}
                       title={item.title}
                       ingredients={item.ingredients}
                       preperation={item.preperation}>

                    </p>
                }

                )}
            </div>
            
        )
    }
    


    render() {
        return (
            <div className='my-recipes-wrapper'>
                
               <button type="submit" onClick={this.handleGetAllRecipes}>Show My Recipes</button>
               <div className='render-wrapper'>
                   {this.renderRecipes()}
               </div>
               
               <Footer />
               
            </div>
            
        )
    }
}