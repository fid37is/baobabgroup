// TeamCarousel.js
import React from 'react';
import '../components/TeamCarousel.css';
import noImage from '../images/noImage.png';

const TeamCarousel = () => {
    // Custom dummy data
    const teamMembers = [
        { name: 'Fidelis Agba', designation: 'Tester', image: noImage },
        { name: 'Oluwaseun Smart', designation: 'Software Developer', image: noImage },
        { name: 'Honor Mason', designation: 'Data Scientist', image: noImage },
        { name: 'Maria Fadeyi', designation: 'Data Scientist', image: noImage },
        { name: 'Cyril Obiorah', designation: 'Data Scientist', image: noImage },
        { name: 'Adesoji Olaitan', designation: 'Data Scientist', image: noImage },
        { name: 'Samantha Sage', designation: 'Data Scientist', image: noImage },
        { name: 'Eke Kelechi', designation: 'DevOps Engineer', image: noImage },
        { name: 'Akinwunmi Akinyemi', designation: 'DevOps Engineer', image: noImage },
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
