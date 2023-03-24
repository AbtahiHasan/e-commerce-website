import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='bg-indigo-600 py-3 px-2'>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center text-white'>
                <NavLink to="/"><h2 className='text-3xl font-bold'>Shop</h2></NavLink>
                
                <ul className='sm:flex gap-4 text-lg fixed top-0 left-0 right-0 bottom-0 sm:static'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;