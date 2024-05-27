// FeedbackForm.js
import React, { useState } from 'react';

const FeedbackForm = ({ closeForm }) => {
    const [feedback, setFeedback] = useState({
        image: null,
        serviceReceived: '',
        firstName: '',
        lastName: '',
        designation: '',
        company: '',
        quote: '' // Add quote to your state
    });
    const [previewImage, setPreviewImage] = useState(null);

    const handleImageChange = (e) => {
        setFeedback({
            ...feedback,
            image: e.target.files[0]
        });
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
    };

    const handleInputChange = (e) => {
        setFeedback({
            ...feedback,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedback);
        closeForm();
    };

    return (
        <div className="feedback-form">
            <div className="image-preview">
                {previewImage ? <img src={previewImage} alt="Preview" /> : <p>No image selected</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="file" name="image" onChange={handleImageChange} placeholder="Image (optional)" />
                <input type="text" name="serviceReceived" onChange={handleInputChange} placeholder="Service Received" required />
                <input type="text" name="firstName" onChange={handleInputChange} placeholder="First Name" required />
                <input type="text" name="lastName" onChange={handleInputChange} placeholder="Last Name" required />
                <input type="text" name="designation" onChange={handleInputChange} placeholder="Designation" required />
                <input type="text" name="company" onChange={handleInputChange} placeholder="Company" required />
                <textarea type="text" name="quote" onChange={handleInputChange} placeholder="Say something about us" required /> {/* Add quote input field */}
                <button className="submitFeedback" type="submit">Submit</button>
            </form>
            <button className='closeFdBoverlay' onClick={closeForm}>Close</button>
        </div>
    );
};

export default FeedbackForm;
