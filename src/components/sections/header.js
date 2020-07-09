import React, { Component } from 'react';
import Logo from '../sections/logo';

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
                   <Logo /> 
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