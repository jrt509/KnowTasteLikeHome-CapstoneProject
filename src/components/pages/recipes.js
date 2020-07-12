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
    }

    render() {
        return (
            <div className=''>
                <input name="title" type="text" placeholder="title" value={this.state.title}></input>
                <textarea name="ingredients" type="text" placeholder="enter ingredients" value={this.state.ingredients}></textarea>
                <textarea name="preperation" type="text" placeholder="enter preperation" value={this.state.preperation}></textarea>
                
            </div>
        )
    }
}