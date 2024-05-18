import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
// import { FaX } from "react-icons/fa6";


// Style your button
const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 7px;
    background-color: #551F0C;
    color: white;
    margin: 50px 0;
    width:20%;
`;

// Style your modal
const StyledModal = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    width: 50%;
    border-radius: 4px;
`;



const CallButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement server-side logic to handle form submission
        console.log(contact);
        // Clear form fields
        setContact({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            company: '',
            subject: '',
            message: ''
        });
    };

    return (

        <>
            <Button onClick={openModal}>Request A Call</Button>
            <StyledModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Request Call Modal"
            >
                <h2>Request A Call</h2>
                <div className="column form-column">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="horizontal-inputs">
                            <input type="text" name="firstName" placeholder="First Name" required value={contact.firstName} onChange={handleInputChange} />
                            <input type="text" name="lastName" placeholder="Last Name" required value={contact.lastName} onChange={handleInputChange} />
                        </div>
                        <input type="tel" name="phone" placeholder="Phone" value={contact.phone} onChange={handleInputChange} />
                        <input type="email" name="email" placeholder="Email" required value={contact.email} onChange={handleInputChange} />
                        <input type="text" name="company" placeholder="Company" value={contact.company} onChange={handleInputChange} />
                        <input type="text" name="subject" placeholder="Subject" required value={contact.subject} onChange={handleInputChange} />
                        <textarea name="message" placeholder="Message" required value={contact.message} onChange={handleInputChange}></textarea>
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                </div>
                {/* <CloseButton onClick={closeModal}><FaX /></CloseButton> */}
            </StyledModal>
        </>
    );
}

export default CallButton;
