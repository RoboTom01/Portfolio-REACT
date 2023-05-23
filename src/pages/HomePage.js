import React from 'react';
import Navbar from '../components/Navbar';
import BackgroundPic from '../components/BackgroundPic';
import About from '../components/About';
import Footer from '../components/Footer';

function HomePage () {
    return (
        <div id='home-page'>
            <Navbar />
            <BackgroundPic />
            <About />
            <Footer />
        </div>
    )
}

export default HomePage