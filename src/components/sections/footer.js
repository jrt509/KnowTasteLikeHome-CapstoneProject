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
                <a href="https://www.pinterest.com" className="fab fa-pinterest"></a>
                <a href="https://www.facebook.com" className="fab fa-facebook"></a>
                <a href="https://www.twitter.com" className="fab fa-twitter"></a>
            </div>
        )
    }
}