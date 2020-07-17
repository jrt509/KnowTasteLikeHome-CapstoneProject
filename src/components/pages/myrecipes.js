import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Footer from '../sections/footer';


export default class MyRecipes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            data: [],
            username: "",
            password: ""
        }
    
        this.handleGetAllRecipes = this.handleGetAllRecipes.bind(this)
    }

    onOpenModal = () => {
        this.setState({ open: true })
    }

    onCloseModal = () => {
        this.setState({ open: false })
    }
    
    handleGetAllRecipes() { 
        fetch(`http://127.0.0.1:5000/recipe/get${this.state.username}`, {
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
        const { open } = this.state;
       
        return (
            <div>
                {this.state.data.map(item => (
                    <div>
                    <button
                        className="recipe-title" 
                        key={item.id} 
                        onClick={this.onOpenModal}
                    >
                        {item.title}
                    </button>
                    <Modal open={open} onClose={this.onCloseModal} center>
                   
                <p>Title:</p>
                <p
                 key={item.id}
                >{item.id}</p>
                <p>Ingredients:</p>
                <p
                 key={item.id}
                >{item.ingredients}</p>
                <p>Preperation:</p>
                <p
                 key={item.id}
                >{item.preperation}</p>
                    </Modal>
                  </div>
                
                )

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