import Card from '../components/Card';
import { FaAngleRight, FaAngleLeft} from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import "../styles/Home.css";

const CardContainer = ({ FeedBackItems }) => {
    const [currentCard, setCurrentCard] = useState(0);
    const [direction, setDirection] = useState(1); 

    const handleNext = () => {
        if (currentCard < FeedBackItems.length - 3) {
            setCurrentCard(currentCard + 1);
        }
    };

    const handlePrevious = () => {
        if (currentCard > 0) {
            setCurrentCard(currentCard - 1);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentCard === FeedBackItems.length - 3) {
                setDirection(-1); // Change direction to left to right
            } else if (currentCard === 0) {
                setDirection(1); // Change direction to right to left
            }
            setCurrentCard(prevCard => Math.max(0, Math.min(FeedBackItems.length - 3, prevCard + direction)));
        }, 3000); // Change card every 3 seconds

        return () => clearInterval(timer); // Clean up on component unmount
    }, [currentCard, direction, FeedBackItems.length]);

    return (
        <>
            <div className="card-container">
                <button className='fdbk-btn prev' onClick={handlePrevious}><FaAngleLeft/></button>
                {FeedBackItems.slice(currentCard, currentCard + 3).map((item, index) => (
                    <Card key={index} {...item} />
                ))}
                <button className='fdbk-btn next' onClick={handleNext}><FaAngleRight/></button>
            </div>
        </>
    );
}

export default CardContainer;
