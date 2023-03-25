import Blog from '../components/Blog';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Nav from '../components/Nav';
import Trust from '../components/Trust';
import image from '/hero.jpg'
const Home = () => {
    return (
        <>
            <Nav/>
            <HeroSection data="Shop" image={image}/>
            <Feature/>
            <Trust/>
            <Blog/>
            <Footer/>
        </>
    );
};

export default Home;