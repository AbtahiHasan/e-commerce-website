import React from 'react';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';

const Home = () => {
    return (
        <>
            <Nav/>
            <HeroSection data="Shop"/>
        </>
    );
};

export default Home;