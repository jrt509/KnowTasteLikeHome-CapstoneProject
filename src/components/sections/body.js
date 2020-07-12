import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider className="carousel-wrapper"
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src="../../../static/assets/images/family-one.jpeg" />
    <div data-src="../../../static/assets/images/family-two.jpeg" />
    <div data-src="../../../static/assets/images/family-three.jpeg" />
    <div data-src="../../../static/assets/images/family-four.jpeg" />
    <div data-src="../../../static/assets/images/family-five.jpeg" />
    <div data-src="../../../static/assets/images/family-six.jpeg" />
    
  </AutoplaySlider>
);




export default class Body extends Component {
    constructor(props) {
        super(props)

        
        this.state = {
            
        }
    }
    
    

    render() {
    
        return (
            <div className='body-wrapper'>
                {slider}
                
            </div>
        )
    }
}