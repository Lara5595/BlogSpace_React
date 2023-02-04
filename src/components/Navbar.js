import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';

import './navbar.css'



const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;