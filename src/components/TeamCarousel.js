// TeamCarousel.js
import React from 'react';
import '../components/TeamCarousel.css';
import mej from '../images/mej.png';
import stratt from '../images/stratt.png';

const TeamCarousel = () => {
    // Custom dummy data
    const teamMembers = [
        { name: 'Fidelis Agba', designation: 'Tester', image: stratt },
        { name: 'Oluwaseun Smart', designation: 'Software Developer', image: mej },
        { name: 'Akinwunmi Adesola', designation: 'Data Scientist', image: stratt },
        { name: 'Maria Fadeyi', designation: 'Data Scientist', image: stratt },
        { name: 'Adesoji Adesinya', designation: 'Data Scientist', image: stratt },
        { name: 'Adesoji Adesinya', designation: 'Data Scientist', image: mej },
        { name: 'Adesoji Adesinya', designation: 'Data Scientist', image: mej },
        { name: 'Adesoji Adesinya', designation: 'Data Scientist', image: stratt },
        // Add more team members as needed
        ];
    
        return (
            <div className="carousel">
            <div className="carouselTrack">
                {teamMembers.map((member, index) => (
                    <div key={index} className="carouselCard">
                    <img src={member.image} alt={member.name} />
                    <h2>{member.name}</h2>
                    <p>{member.designation}</p>
                    </div>
                ))}
                </div>
            </div>
        );
    };

export default TeamCarousel;
