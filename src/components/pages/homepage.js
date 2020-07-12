import React, { Component } from 'react';
import Header from '../sections/header.js';
import Body from '../sections/body.js';
import Footer from '../sections/footer.js';


export default class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='home-page-wrapper'>
            
                <Header />
                <Body />
                <Footer />
               
                
                
            </div>
        )
    }
}