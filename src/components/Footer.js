    // Footer.js
    import React from 'react';
    import '../components/Footer.css';
    import { Link, NavLink } from 'react-router-dom';
    import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
    import Baobab_logo from '../images/Baobab_logo.png';
    import { Email, PhoneNumber} from '../components/ContactInfo';
    import FeedbackButton from './FeedbackButton';

    const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-row">
            <div className="footer-column">
            <img src={Baobab_logo} alt="Logo" />
            <Email className='email contactInfo' email="team@baobabpartners.com" />
            <PhoneNumber className='phone contactInfo' number="+19197249260" />
            </div>
            <div className="footer-column">
            <h3>Company</h3>
            <ul>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/blog" >Blog</NavLink></li>
                <li><NavLink to="/foundation">Foundation</NavLink></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
            </ul>
            </div>
            <div className="footer-column">
            <h3>Customer Service</h3>
            <ul>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><FeedbackButton /></li>
            </ul>
            </div>
            <div className="footer-column">
            <h3>Address</h3>
            <p>One World Trade, Suite 8500 <br></br>New York, NY 10007</p>
            <div className="social-icons">
                <Link href="#"><FaInstagram /></Link>
                <Link href="#"><FaFacebookF /></Link>
                <Link href="#"><FaXTwitter /></Link>
                <Link href="#"><FaLinkedinIn /></Link>
            </div>
            </div>
        </div>
        <div className="copyright-bar">
            © Baobab Partners 2024
        </div>
        </footer>
    );
    };

    export default Footer;
