import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [toggle, setToggle] = useState(false)
    return (        
            <nav className='bg-indigo-500 text-white fixed top-0 left-0 right-0 z-50'>                
                <section className='max-w-[1200px] mx-auto flex items-center justify-between p-4'>
                    <NavLink to="/"><h2 className='text-3xl font-bold'>Shoope</h2></NavLink>
                    {!toggle ? <AiOutlineMenu onClick={() => {setToggle(!toggle)}} className='text-2xl md:hidden block'/> : <AiOutlineClose onClick={() => {setToggle(!toggle)}} className='text-2xl md:hidden block'/>}
                    
                    <ul className='hidden md:flex gap-5'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                    {/* responsive  */}
                    <ul className={`block duration-300 md:hidden gap-5 fixed  top-[68px] ${!toggle ? 'left-[-100%]' : 'left-0'} bg-black w-full h-screen`}>
                        <li><NavLink className="block p-4" to="/">Home</NavLink></li>
                        <li><NavLink className="block p-4" to="/shop">Shop</NavLink></li>
                        <li><NavLink className="block p-4" to="/contact">Contact</NavLink></li>
                        <li><NavLink className="block p-4" to="/about">About</NavLink></li>
                    </ul>
                </section>                
            </nav>        
    );
};

export default Nav;