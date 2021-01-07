import React, {Component} from 'react';
import '../../src/App.css';
import Footer from '../components/Footer';
import img from "../images/logo2.png"
import img2 from "../images/workfromhome.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function  Products(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
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
          title: 'DolorEE magna',
          text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
          img: img2,
          title: 'Eget est lorem',
          text: 'Lorem Ipsum adipiscing elit ipsum.'
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
                            <div className="cardtitle">{x.title}</div>
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

