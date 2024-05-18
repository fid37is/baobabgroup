import React from 'react';
import '../components/Team.css';
import stratt from '../images/stratt.png';
import mej from '../images/mej.png';


const Team = () => {
    return (
        <>
        <div className="teamComponent">
            <div className="teamCard">
            <img src={mej} alt="team member" />
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
            <img src={stratt} alt="team member" />
            </div>
        </div>
        
    </>
        );
    };

export default Team;
