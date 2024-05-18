import React from 'react';
import "../styles/Home.css";

const Card = ({ heading, quote, name, position, logo }) => {
    return (
        <div className="card">
        <h2>{heading}</h2>
        <blockquote>{quote}</blockquote>
        <p className="name">{name}</p>
        <p className="position">{position}</p>
        <img src={logo} alt="Logo" />
        </div>
    );
}

export default Card;
