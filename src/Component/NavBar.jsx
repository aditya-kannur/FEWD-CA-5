import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Forms from './Forms'; 
import Books from './Books'; 
import './NavBar.css'; 
import logo from '../Resources/Logo-image.png'; 

function NavBar() {
    return (
        <>
            {/* Navbar container */}
            <div className='navbar'>
                <div className='left-nav'>
                    <img src={logo} alt="logo"/> 
                </div>
                <div className='right-nav'>
                    <p><Link to="/FEWD-CA-5">Home</Link></p>
                    <p><Link to="/reg">Register</Link></p>
                </div>
            </div>
            {/* Routes for handling navigation */}
            <div>

            </div>
        </>
    );
}

export default NavBar;
