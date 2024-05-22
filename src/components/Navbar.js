import { NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../images/Baobab_logo.png';
import { FaBars, FaX } from "react-icons/fa6";
import '../styles/Navbar.css';

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
                    <img src={logo} alt="Logo" className="logo" />
                    <div className="icon" onClick={toggle}>
                        {isOpen ? <FaX /> : <FaBars />}
                    </div>
                    <ul className={`menu-links ${isOpen ? 'show-nav' : ''}`}>
                        <li>
                            <NavLink to="/home" activeClassName="active-link" onClick={closeMenu}>Home</NavLink>
                        </li>
                        <li><NavLink to="/about" activeClassName="active-link" onClick={closeMenu}>About Us</NavLink></li>
                        <li><NavLink to="/services" activeClassName="active-link" onClick={closeMenu}>What We Do</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active-link" onClick={closeMenu}>Contact Us</NavLink></li>
                        <li><NavLink to="/blog" activeClassName="active-link" onClick={closeMenu}>Blog</NavLink></li>
                </ul>

                    <div className="call-chat">
                        <div className="phone-number">
                            <span>+1 (919) 724-9260</span>
                        </div>
                    </div>
                    <div className="button-container">
                        <NavLink to="/foundation" onClick={closeMenu}>
                            <button className='ourfound'>Our Foundation</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
