import React from 'react';
import Feature from '../components/Feature';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';
import image from './../../public/images/hero.jpg'
const Home = () => {
    return (
        <>
            <Nav/>
            <HeroSection data="Shop" image={image}/>
            <Feature/>
        </>
    );
};

export default Home;