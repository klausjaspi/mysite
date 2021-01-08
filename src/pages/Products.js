import React, {Component} from 'react';
import '../../src/App.css';
import Footer from '../components/Footer';
import img from "../images/yougot.jpg"
import img2 from "../images/speak.jpg";
import img3 from "../images/roadtrip.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function  Products(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5500,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 700,
              settings: {
                arrows: false,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 500,
              settings: {
                arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 400,
              settings: {
                arrows: false,
                slidesToShow: 1
              }
            }
          ]
      };

      const products = [
        {
          img: img,
          title: "Coaching   -  Have you hit dead-end and lack motivation?",
          text: "\nWe have the best coaches from almost every field around the world, learn more!"
        },
        {
          img: img2,
          title: 'Course   -  How to give a unforgettable speech',
          text: '\nOur award winning speakers unveil you the secrets of how to give an amazing speech. \n\nSign up today, limited seats!'
        },
        {
          img: img3,
          title: "Guide   -  Must visit road trip places",
          text: "\nReady to go guide with trip plans and details around the world."
        }
      ]

    return (
    <>
    <h1 className='products'>PRODUCTS</h1>

    <div className="sliderapp">
        <Slider {...settings}>
            {products.map((x,i) => {
                return(
                    <div key={i} className="img-card">
                        <img src={x.img} className="img" alt=""/>
                        <div class="card-body">
                            <div className="card-title">{x.title}</div>
                            <div className="card-text">{x.text}</div>
                        </div>
                            
                    </div>
                    
                )
            })}         
                
        </Slider>
        
    </div>

            
    <Footer />
    </>
    );
}

