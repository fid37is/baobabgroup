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
                <h3>Oladimeji Abidoye</h3>
                <p>Chief Technical Officer</p>
            </div>
            </div>
            <div className="teamCard reversed">
            <div className='pstn2'>
                <h3>Stratten Waldt</h3>
                <p>Chief Executive Officer </p>
            </div>
            <img src={noImage} alt="team member" />
            </div>
        </div>
        
    </>
        );
    };

export default Team;
