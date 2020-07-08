import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='login-wrapper'>
                 <div className='left-header-column'>
                    <div className='logo-wrapper'>
                        <div className='logo-top'>Know Taste</div>
                        <div className='logo-middle'><i className="fas fa-utensils"></i></div>
                        <div className='logo-bottom'>Like Home</div>
                    </div>
                </div>
                <div className='footer-wrapper'>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                </div>
               
            </div>
        )
    }
}