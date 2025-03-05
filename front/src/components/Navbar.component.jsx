import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='header'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Navbar;