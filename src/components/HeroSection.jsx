import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';


const HeroSection = ({data, image}) => {
    return (
        <section className='bg-slate-200 mt-[52px] p-10'>
            <div className='max-w-[1200px] h-[80vh] mx-auto grid md:grid-cols-2 gap-5'>
                <div className='w-full flex flex-col justify-center h-full'>
                    <h1 className='text-5xl mt-5'>{data}</h1>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit expedita totam fuga minima culpa cumque delectus quisquam excepturi, asperiores tempore in earum vitae rerum quaerat velit quos, ipsa aut.</p>
                    <Button className="w-[100px] mt-5"> <NavLink to="/shop">Shop Now</NavLink></Button>
                </div>
                <div className='w-full h-full flex justify-center items-center'>
                    <img src={image} className="object-cover" alt="banner image" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;