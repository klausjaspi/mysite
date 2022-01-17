import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";


function Footer() {
    return (
        <div className="footer-container">
   
            <div className='footer-link-bottom'>
                    <div class='footer-link-social'>
                        <h2>Social Media</h2>
                        <Link to={{ pathname: "https://www.instagram.com/klausjaspi/"}} target="blank"><i class="fab fa-instagram"/></Link>
                        <Link to={{ pathname: "https://www.facebook.com/klaus.jaspi/"}} target="blank"><i class="fab fa-facebook-f" /></Link>
                        <Link to={{ pathname: "https://www.linkedin.com/in/klaus-jaspi-9375401a8/"}} target="blank"><i class="fab fa-linkedin-in" /></Link>
                        
                    </div>

            </div>
            <div className="emailinfo">
                    <h2>Email</h2>
                    <p>klaus.jaspi@gmail.com</p>
            </div>
        </div>
    );
}

export default Footer
