import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='header-wrapper'>
                <div className='left-header-column'>
                    <div className='logo-wrapper'>
                        <div className='logo-top'>Know Taste</div>
                        <div className='logo-middle'><i className="fas fa-utensils"></i></div>
                        <div className='logo-bottom'>Like Home</div>
                    </div>
                </div>
                <div className='right-header-column'>
                    <div className='signup'>
                        <button>Sign Up</button>
                    </div>
                    <div className='login'>
                        <button>Log In</button>
                    </div>
                </div>
                
                
            </div>
        )
    }
}