// FeedbackButton.js
import React, { useState } from 'react';
import FeedbackForm from './FeedbackForm';
import './FeedbackForm.css';

const FeedbackButton = () => {
    const [showForm, setShowForm] = useState(false);

    const handleOpenForm = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <>
        <button className='feedbackButton' onClick={handleOpenForm}>Share Feedback</button>
        {showForm && (
            <div className="feedback-overlay">
                <FeedbackForm closeForm={handleCloseForm} />
            </div>
        )}
        </>
    );
};

export default FeedbackButton;
