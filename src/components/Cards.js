import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import picture from '../images/img-2.jpg';
import picture2 from '../images/img-9.jpg';
import picture3 from '../images/img-3.jpg';
import picture4 from '../images/img-4.jpg';
import picturehome from '../images/img-home.jpg';



function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Tutorials!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={picture3}
                        text="Explore the basics of"
                        label="Tutorial"
                        path='/services'
                        />
                        <CardItem 
                        src={picturehome}
                        text="Explore the basics of"
                        label="Tutorial"
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={picture4}
                        text="Explore the basics of"
                        label="Tutorial"
                        path='/services'
                        />
                        <CardItem 
                        src={picture}
                        text="Explore the basics of"
                        label="Tutorial"
                        path='/services'
                        />
                        <CardItem 
                        src={picture2}
                        text="Explore the basics of"
                        label="Tutorial"
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
