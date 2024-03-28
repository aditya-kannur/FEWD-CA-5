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
                    <img src={logo} alt="" /> 
                </div>
                {/* Right section of the navbar with navigation links */}
                <div className='right-nav'>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/reg">Register</Link></p>
                </div>
            </div>
            {/* Routes for handling navigation */}
            <div>
                <Routes>
                    <Route path="/" element={<Books/>}></Route>
                    <Route path="/reg" element={<Forms/>}></Route>
                </Routes>
            </div>
        </>
    );
}

export default NavBar;
