import React, { Component } from 'react';
import Body from '../sections/body.js';
import Footer from '../sections/footer.js';


export default class HomePage extends Component {
    constructor(props) {
        super(props)

       
    }

    render() {
        return (
            <div className='home-page-wrapper'>
                <Body />
                <Footer />
            </div>
        )
    }
}