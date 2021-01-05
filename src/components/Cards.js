import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import picture from '../images/maxresdefault.jpg';
import picture2 from '../images/workout-home.jpg';
import picture3 from '../images/workfromhome.jpg';
import picture4 from '../images/junior_article.jpg';
import picture5 from '../images/water.jpg';
import {Link} from 'react-router-dom';



function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Tips & Tutorials!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <li className="cards__item">
                            <Link className="cards__item__link" to={{ pathname: "https://www.youtube.com/watch?v=dGcsHMXbSOA&t=162s"}} target="blank">
                                <figure className="cards__item__pic-wrap" data-category="Tutorial">
                                    <img src={picture} alt="" className="cards__item__img"/>
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className="cards__item__text">React Tutorial For Beginners</h5>
                        
                                </div>
                            </Link>
                        </li>
                        <li className="cards__item">
                            <Link className="cards__item__link" to={{ pathname: "https://www.youtube.com/watch?v=HKWMV2LhMHo" }} target="blank">
                                <figure className="cards__item__pic-wrap" data-category="Tutorial">
                                    <img src={picture2} alt="" className="cards__item__img"/>
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className="cards__item__text">How to Sit With Proper Posture</h5>
                        
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <ul className="cards__items">
                        <li className="cards__item">
                            <Link className="cards__item__link" to={{ pathname: "https://www.everydayhealth.com/healthy-living/your-work-from-home-survival-guide-for-self-care/" }} target="blank">
                                <figure className="cards__item__pic-wrap" data-category="Guide">
                                    <img src={picture3} alt="" className="cards__item__img"/>
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className="cards__item__text">Your Work-From-Home Survival Guide for Self-Care</h5>
                                </div>
                            </Link>
                        </li>
                        <li className="cards__item">
                            <Link className="cards__item__link" to={{ pathname: "https://medium.com/fed-or-dead/7-reasons-you-should-be-hiring-more-junior-developers-49f8d4a32fd0" }} target="blank">
                                <figure className="cards__item__pic-wrap" data-category="Article">
                                    <img src={picture4} alt="" className="cards__item__img"/>
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className="cards__item__text">7 Reasons Why You Should Be Hiring More Junior Developers</h5>
                                </div>
                            </Link>
                        </li>
                        <li className="cards__item">
                            <Link className="cards__item__link" to={{ pathname: "https://www.medicalnewstoday.com/articles/290814" }} target="blank">
                                <figure className="cards__item__pic-wrap" data-category="Article">
                                    <img src={picture5} alt="" className="cards__item__img"/>
                                </figure>
                                <div className="cards__item__info">
                                    <h5 className="cards__item__text">15 Benefits of Drinking Water</h5>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
