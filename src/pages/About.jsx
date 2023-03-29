import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';
import image from '/about.jpg'

const About = () => {
    return (
        <section>
            <Nav/>
            <HeroSection data="About This Shop" image={image}/>
            {/* <Footer/> */}
        </section>
    );
};

export default About;