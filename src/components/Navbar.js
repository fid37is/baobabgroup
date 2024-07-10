import { NavLink } from 'react-router-dom';
import React from 'react';
import Baobab_logo from '../images/Baobab_logo.png';
import { FaBars, FaX } from "react-icons/fa6";
import '../styles/Navbar.css';
import { PhoneNumber } from './ContactInfo';

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-container">
                    <img src={Baobab_logo} alt="Logo" className="logo" />
                    <div className="icon" onClick={toggle}>
                        {isOpen ? <FaX /> : <FaBars />}
                    </div>
                    <div className="siteName">
                            <h1>Baobab <br />Partners</h1>
                        </div>
                    <ul className={`menu-links ${isOpen ? 'show-nav' : ''}`}>
                        <li>
                            <NavLink to="/home" activeClassName="active-link" onClick={closeMenu}>Home</NavLink>
                        </li>
                        <li><NavLink to="/about" activeClassName="active-link" onClick={closeMenu}>About Us</NavLink></li>
                        <li><NavLink to="/services" activeClassName="active-link" onClick={closeMenu}>What We Do</NavLink></li>
                        <li><NavLink to="/foundation" activeClassName="active-link" onClick={closeMenu}>Our Foundation</NavLink></li>
                        </ul>

                    <div className="call-chat">
                        <PhoneNumber className='phone contactInfo' number="+1 (919) 724-9260" />
                    </div>
                    <div className="button-container">
                        <NavLink to="/contact" onClick={closeMenu}>
                            <button className='ourfound'>Contact Us</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
