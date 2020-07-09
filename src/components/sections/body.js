import React, { Component } from 'react';
import Book from '../../../static/assets/images/book-image copy.png';
import Logo from '../sections/logo';



export default class Body extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='body-wrapper'>
                <img src={Book}></img>
                <div className='logo-on-book'><Logo /></div>
                
            </div>
        )
    }
}