import React, { useState } from 'react';
import Footer from '../components/Footer';
import '../styles/Contact.css';
import '../components/ContactInfo.css';
import {  FaLocationDot } from "react-icons/fa6";
import { PhoneNumber, Email } from '../components/ContactInfo';

function Contact() {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement server-side logic to handle form submission
        console.log(contact);
        // Clear form fields
        setContact({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            company: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
        <div className="contact-container">
            <div className="row-contact">
                <div className="col-contact">
                    <h1>Contact Us</h1>
                    <p className='call'>
                        Please contact us or fill out the form below, and we will get back to you in no time.
                    </p>
                </div>
                <div className="col-contact">
                     {/* TODO: Embed map here */}
                    <div className="column map-area">
                        Map goes here
                    </div>
                </div>
            </div>
            <div className="row-contact">
                <div className="col-contact contact-bg">
                <PhoneNumber number="+19197249260" />
                <Email email="team@baobabpartners.com" />
                    <div className='address contactInfo'><FaLocationDot /> 
                    One World Trade, Suite 8500 New York, NY 10007</div>
                </div>
                <div className="col-contact form-bg">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="horizontal-inputs">
                            <input type="text" name="firstName" placeholder="First Name" required value={contact.firstName} onChange={handleInputChange} />
                            <input type="text" name="lastName" placeholder="Last Name" required value={contact.lastName} onChange={handleInputChange} />
                        </div>
                        <input type="tel" name="phone" placeholder="Phone" value={contact.phone} onChange={handleInputChange} />
                        <input type="email" name="email" placeholder="Email" required value={contact.email} onChange={handleInputChange} />
                        <input type="text" name="company" placeholder="Company" value={contact.company} onChange={handleInputChange} />
                        <input type="text" name="subject" placeholder="Subject" required value={contact.subject} onChange={handleInputChange} />
                        <textarea name="message" placeholder="Write to us..." required value={contact.message} onChange={handleInputChange}></textarea>
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                </div>
            </div>
            <div className="row-contact workingHours">
                <div className="col-contact hrsTitle">
                    <h1>Our Working Hours</h1>
                </div>
                <div className="col-contact">
                    <h4>Monday – Friday: 9AM – 6PM</h4>
                    <h4>Saturday: 10AM – 5PM</h4>
                    <h4>Sunday: 10AM – 5PM</h4>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Contact;
