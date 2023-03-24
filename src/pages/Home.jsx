import React from 'react';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';
import image from './../../public/images/hero.jpg'
const Home = () => {
    return (
        <>
            <Nav/>
            <HeroSection data="Shop" image={image}/>
        </>
    );
};

export default Home;