// TeamCarousel.js
import React from 'react';
import '../components/TeamCarousel.css';
import noImage from '../images/noImage.png';

const TeamCarousel = () => {
    // Custom dummy data
    const teamMembers = [
        { 
            name: 'Ifeanyi Okwuobi', designation: 'Front End Engineer', image: noImage 
        },
        { 
            name: 'Fidelis Agba', designation: 'Front End Developer/Quality Assurance', image: noImage 
        },
        { 
            name: 'Oluwaseun Smart', designation: 'Developer', image: noImage 
        },
        { 
            name: 'Honor Mason', designation: 'Head of Operations and Development', image: noImage 
        },
        { 
            name: 'Maria Fadeyi', designation: 'Junior Business Analyst/Junior PM', image: noImage 
        },
        { 
            name: 'Deo Fagnisse', designation: 'Project Manager/Solution Architect', image: noImage 
        },
        { 
            name: 'Demi Oketogun', designation: 'Special Assistant, Office of the CTO', image: noImage 
        },
        { 
            name: 'Cyril Obiorah', designation: 'Senior Front End Developer', image: noImage 
        },
        { 
            name: 'Adesoji Olaitan', designation: 'Developer/Junior Technical Lead', image: noImage 
        },
        { 
            name: 'Samantha Sage', designation: 'Data Scientist', image: noImage 
        },
        { 
            name: 'Oladele Fadeyi', designation: 'Developer/Junior PM', image: noImage 
        },
        { 
            name: 'Lola Okubena', designation: 'Junior Analyst/Junior PM', image: noImage
        },
        { 
            name: 'Marcos Rijo', designation: 'Senior Developer', image: noImage 
        },
        { 
            name: 'Olaoluwa Ogunnusi', designation: 'Project Manager', image: noImage 
        },
        { 
            name: 'Eke Kelechi', designation: 'Software Engineer - Special Projects', image: noImage 
        },
        { 
            name: 'Akinwunmi Akinyemi', designation: 'Junior Developer', image: noImage 
        }, 
        { 
            name: 'Oreoluwa Abidoye', designation: 'Accountant', image: noImage 
        },
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
