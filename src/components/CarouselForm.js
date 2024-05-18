// Image Upload Form Component
import React, { useState } from 'react';
import '../styles/Home.css'
const CarouselForm = ({ onImageSubmit }) => {
    const [image, setImage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onImageSubmit(image);
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Submit</button>
        </form>
    );
};

export default CarouselForm;