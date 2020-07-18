import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Footer from '../sections/footer';
import Cookies from 'js-cookie';


export default class MyRecipes extends Component {
    constructor(props) {
        super(props)
        
        if(!Cookies.get("username")) {
            props.history.push("/")
          }

        this.state = {
            open: false,
            data: [],
            username: "das",
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
    componentDidMount() {
        this.handleGetAllRecipes()
    }
    
    handleGetAllRecipes() { 
        fetch(`http://127.0.0.1:5000/recipe/get/${Cookies.get("username")}`, {
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
                        // key={item.id} 
                        onClick={this.onOpenModal}
                    >
                        {item.title}
                    </button>
                    {this.state.data.map(item => (
                    <Modal open={open} onClose={this.onCloseModal} center>
                   
                <p>Title:</p>
                <p>{item.title}</p>
                <p>Ingredients:</p>
                <p>{item.ingredients}</p>
                <p>Preperation:</p>
                <p>{item.preperation}</p>
                   

                   
                    </Modal>
                    ))}
            
                  </div>
                
                )

                )}
            </div>
            
          
        )
       
        
    }
    

    render() {
        return (
            <div className='my-recipes-wrapper'>
                
                
               {/* <button type="submit" onClick={this.handleGetAllRecipes}>Show My Recipes</button> */}
               
               
               <div className='render-wrapper'>
                   {this.renderRecipes()}
               </div>
               
               <Footer />
               
            </div>
            
        )
    }
}