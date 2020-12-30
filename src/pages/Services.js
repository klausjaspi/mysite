import React from 'react'
import '../../src/App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export default function Services(){
    return (
        <>
        <h1 className='services'>SERVICES</h1>
            <Cards />
            <Footer />
        </>
        );
}