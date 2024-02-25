import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Navbar = () => {

    const navs = <>
     <Link to='/'><li>Home</li></Link>
     <Link to='/about'><li>About Us </li></Link>
     <Link to="/community"><li>Community</li></Link>
     <Link to='/blog'><li>Blog</li></Link>
     <Link to='/contact'><li>Contact Us</li></Link>
    </>
    return (
        <header className="p-4 bg-gray-800 text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
            <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex gap-2 items-center p-2">
                <img className='w-20 h-18 rounded' src={logo}/>
                <span className='text-3xl font-semibold' >VistaVoyages</span>
            </a>
            <ul className="items-center decoration-0 hidden gap-8 lg:flex">
                {/* <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400">Home</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</a>
                </li>
                <li className="flex">
                    <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Contact us</a>
                </li>
            */}
                     {navs} 
             </ul>
        
            <div className="items-center flex-shrink-0 hidden lg:flex">
                <Link to='/register'>
                <button className="self-center px-8 py-3 rounded">Login</button>
                </Link>
              
                {/* <button className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900">Sign up</button> */}
            </div>
            <button className="p-4 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-100">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </header>
    );
};

export default Navbar;