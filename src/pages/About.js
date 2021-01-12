import React from 'react';
import "../../src/App.css";
import Footer from '../components/Footer';
import me from "../images/me_mod.jpg";



function About() {
    return (
        <>
            <div className="about">
                <div>
                <img className="mypic" src={me} alt=""/>
                <p className="photocredit">Photo by @sandervillphotos</p>
                </div>
                <div className="welcometext">
                   <h2>Welcome to MySite</h2> 
                   <p>My name is Klaus Jäspi. I'm open-minded, detail oriented{"\n"}and unprompted second year ICT-engineer student from Naantali. </p>
                   <p className="see">See more below</p>
                </div>
                
                
            </div>
            <div className="mytext-container">
                <div className="mytext-section">
                    
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About
