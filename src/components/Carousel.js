// Carousel Component
import React from 'react';
import '../styles/Home.css';
import mitg8 from '../images/mitg8.png';
// import Baobab_logo from '../images/Baobab_logo.png';

const Carousel = () => {

    const customerLogo = [
        { image: mitg8 },
        { image: mitg8 },
        { image: mitg8 },
        { image: mitg8 },
        { image: mitg8 },
        { image: mitg8 },
        { image: mitg8 },
        { image: mitg8 },
        // Add more team members as needed
        ];
    
        return (
            <div className="carousel-logo">
            <div className="carouselTracks">
                {customerLogo.map((images, index) => (
                    <div key={index} className="carouselLogo">
                    <img src={images.image} alt={images.name} />
                    </div>
                ))}
                </div>
            </div>
        );


    // const images = [
    //     { src: mitg8, alt: 'Customer 1' },
    //     { src: Baobab_logo, alt: 'Customer 2' },
    //     { src: mitg8, alt: 'Customer 1' },
    //     { src: Baobab_logo, alt: 'Customer 2' },
    //     { src: mitg8, alt: 'Customer 1' },
    //     { src: Baobab_logo, alt: 'Customer 2' },
    //     // Add more images as needed
    // ];

    // return (
    //     <div>
    //     {images.map((image, index) => (
    //         <img key={index} src={image.src} alt={image.alt} className="carousel-image" />
    //     ))}
    //     </div>
    // );
};

export default Carousel;
