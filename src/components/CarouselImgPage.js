// Image Upload Page Component
import React from 'react';
import CarouselForm from '../components/CarouselForm';

const CarouselImgPage = ({ onImageSubmit }) => {
    return (
        <div>
        <h1>Upload Image</h1>
        <CarouselForm onImageSubmit={onImageSubmit} />
        </div>
    );
};

export default CarouselImgPage;
