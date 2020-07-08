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
                <i class="fab fa-pinterest"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
            </div>
        )
    }
}