import React from 'react';
import '../components/Team.css';
import noImage from '../images/noImage.png';



const Team = () => {
    return (
        <>
        <div className="teamComponent">
            <div className="teamCard">
            <img src={noImage} alt="team member" />
            <div className='pstn1'>
                <h3>Olademeji Abidoye</h3>
                <small>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface </small>
            </div>
            </div>
            <div className="teamCard reversed">
            <div className='pstn2'>
                <h3>Stratten Waldt</h3>
                <small>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface </small>
            </div>
            <img src={noImage} alt="team member" />
            </div>
        </div>
        
    </>
        );
    };

export default Team;
