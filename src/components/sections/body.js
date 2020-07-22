import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Curry from '../../../static/assets/images/curry.jpg';
import FiberFoods from '../../../static/assets/images/fiber-foods.jpg';
import Berries from '../../../static/assets/images/berries.jpg';
import Tilapia from '../../../static/assets/images/tilapia.jpg';
import Veggies from '../../../static/assets/images/veggies.jpg';
import Healthy2 from '../../../static/assets/images/healthy2.jpg';


const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider className="carousel-wrapper"
    play={true}
    cancelOnInteraction={false}
    interval={6000}
  >
    
    <div data-src="../../../static/assets/images/curry.jpg" />
    <div data-src="../../../static/assets/images/fiber-foods.jpg" />
    <div data-src="../../../static/assets/images/berries.jpg" />
    <div data-src="../../../static/assets/images/tilapia.jpg" />
    <div data-src="../../../static/assets/images/veggies.jpg" />
    <div data-src="../../../static/assets/images/healthy2.jpg" />
    
  </AutoplaySlider>
  
);





export default class Body extends Component {
    constructor(props) {
        super(props)

    }
    
    

    render() {
    
        return (
            <div className='body-wrapper'>
                <p className="tab blink">START DIGITIZING YOUR RECIPES TODAY BY SIGNING UP OR LOGGING IN!</p>
                {slider}
                
            </div>
        )
    }
}