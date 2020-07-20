import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';
import Footer from '../sections/footer';
import Cookies from 'js-cookie';
import Popup from 'reactjs-popup';



export default class MyRecipes extends Component {
    constructor(props) {
        super(props)
        
        if(!Cookies.get("username")) {
            props.history.push("/")
          }

        this.state = {
            data: [],
            username: "",
            password: "",
           
        }
    
        this.handleGetAllRecipes = this.handleGetAllRecipes.bind(this)
    }

    componentDidMount() {
        this.handleGetAllRecipes()
    }

    handleGetAllRecipes() { 
        fetch(`https://know-taste-like-home-back-jrt.herokuapp.com/recipe/get/${Cookies.get("username")}`, {
            method: "GET",
            header: {"Content-Type": "application/json"}})
        .then(response => response.json())
        .then(data => {
            this.setState({ data: data })
            console.log(data)
        })
        .catch(error => console.log(error))
    }

    renderRecipes() {
        return (
            <div>
                {this.state.data.map(recipe => (
                    <Popup trigger={<button key={recipe.id}>{recipe.title}</button>}>
                        <div className="modal-section">
                            <h3>Title:</h3>
                            <h3>{recipe.title}</h3>
                        </div>
                        <div className="modal-section">
                            <h3>Ingredients:</h3>
                            <h3>{recipe.ingredients}</h3>
                        </div>
                        <div className="modal-section">
                            <h3>Preperation:</h3>
                            <h3>{recipe.preperation}</h3>
                        </div>
                    </Popup>
                
                ))}
            </div>
        )
    }

    render() {
        return (
            <div className='my-recipes-wrapper' >
                <div className='render-wrapper'>
                   {this.renderRecipes()}
               </div>
               <Footer />
            </div>
            
        )
    }
}