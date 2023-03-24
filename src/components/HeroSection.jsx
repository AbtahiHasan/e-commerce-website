import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';

const HeroSection = ({data}) => {
    return (
        <section className='bg-slate-200 h-[80vh]'>
            <div className='max-w-[1200px] mx-auto grid md:grid-cols-2 gap-5'>
                <div className='w-full flex flex-col justify-center h-full'>
                    <h1 className='text-5xl'>{data}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit expedita totam fuga minima culpa cumque delectus quisquam excepturi, asperiores tempore in earum vitae rerum quaerat velit quos, ipsa aut.</p>
                    <Button className="w-[100px]"> <NavLink to="/shop">Shop Now</NavLink></Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;