import React from 'react'
import { Button } from './Button';
import '../App.css';
import './HeroSections.css';
import video from '../videos/Sea.mp4';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted/>
            <h1>TUTORIALS WAIT!</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                    Get Started
                </Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                    About Me <i className="fas fa-info-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
