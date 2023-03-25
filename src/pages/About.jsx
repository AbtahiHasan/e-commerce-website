import React from 'react';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';
import image from '/about.jpg'

const About = () => {
    return (
        <section>
            <Nav/>
            <HeroSection data="About This Shop" image={image}/>
        </section>
    );
};

export default About;