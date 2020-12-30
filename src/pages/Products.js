import React from 'react';
import '../../src/App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export default function  Products(){
    return (
    <>
    <h1 className='products'>PRODUCTS</h1>
        <Cards />
        <Footer />
    </>
    );
}