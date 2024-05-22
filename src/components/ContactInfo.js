// ContactInfo.js
import React from 'react';
import { FaMobileScreenButton, FaRegEnvelope } from 'react-icons/fa6';
import '../components/ContactInfo.css';

export function PhoneNumber({ number }) {
    const redirectToWhatsApp = () => {
        window.location.href = `whatsapp://send?phone=${number}`;
    };

    return (
        <div className='phone contactInfo' onClick={redirectToWhatsApp}>
            <FaMobileScreenButton /> {number}
        </div>
    );
}

export function Email({ email }) {
    return (
        <a href={`mailto:${email}`} className='email contactInfo'>
            <FaRegEnvelope /> {email}
        </a>
    );
}
