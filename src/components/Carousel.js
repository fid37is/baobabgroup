import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import carImg1 from '../images/carImg1.png';
import carImg2 from '../images/carImg2.png';
import carImg3 from '../images/carImg3.png';
import carImg4 from '../images/carImg4.png';
import carImg5 from '../images/carImg5.png';
import carImg6 from '../images/carImg6.png';
import carImg7 from '../images/carImg7.png';

const Carousel = () => {
    const customerLogo = [
        { image: carImg1 },
        { image: carImg2 },
        { image: carImg3 },
        { image: carImg4 },
        { image: carImg5 },
        { image: carImg6 },
        { image: carImg7 },
    ];

    const [translateValue, setTranslateValue] = useState(0);
    const [scrollingRight, setScrollingRight] = useState(true);

    useEffect(() => {
        // Calculate the width of a single image with margin
        const imageWidth = document.querySelector('.carouselImg')?.offsetWidth || 0;
        // Calculate the width of the container
        const containerWidth = document.querySelector('.carousel-track')?.offsetWidth || 0;
        // Calculate how many images can fit in the container
        const visibleImages = Math.floor(containerWidth / imageWidth);
        // Calculate the maximum translate value based on the number of hidden images
        const maxTranslateValue = -imageWidth * (customerLogo.length - visibleImages);

        const interval = setInterval(() => {
            setTranslateValue(currentValue => {
                if (currentValue <= maxTranslateValue && scrollingRight) {
                    setScrollingRight(false);
                    return maxTranslateValue;
                }
                if (currentValue >= 0 && !scrollingRight) {
                    setScrollingRight(true);
                    return 0;
                }
                return scrollingRight ? currentValue - imageWidth : currentValue + imageWidth; // Scroll by one image width
            });
        }, 3000); // Adjust interval as needed for smooth animation

        return () => clearInterval(interval);
    }, [scrollingRight, customerLogo.length]);

    return (
        <div className="carousel-track" style={{ transform: `translateX(${translateValue}px)` }}>
            {customerLogo.map((img, index) => (
                <div className='carouselImg' key={index}>
                    <img src={img.image} alt={`Customer logo ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
