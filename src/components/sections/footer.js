import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='footer-wrapper'>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
            </div>
        )
    }
}