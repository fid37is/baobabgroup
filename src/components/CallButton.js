import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
// import { FaX } from "react-icons/fa6";


// Define your breakpoints
    const sizes = {
        mobile: '600px',
        tablet: '768px',
    };
    
    const device = {
        mobile: `(max-width: ${sizes.mobile})`,
        tablet: `(max-width: ${sizes.tablet})`,
    };
    
    // Style your button
    const Button = styled.button`
        padding: 10px 20px;
        border: none;
        border-radius: 7px;
        background-color: transparent;
        border: 1px solid #551F0C;
        color: #551F0C;
        margin: 20px 0;
        font-size: 18px;
        width: 30%;
    
        @media ${device.mobile} {
            width: 70%;
        }
    
        @media ${device.tableet} {
            width: 50%;
        }
    `;
    
    // Style your modal
    const StyledModal = styled(Modal)`
        position: relative;
        top: 10%;
        margin-left: auto;
        margin-right: auto;
        background: white;
        padding: 10px 30px;
        width: 30%;
        border-radius: 7px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1), 0 3px 3px rgba(0,0,0,0.12);
    
        @media ${device.mobile} {
            width: 90%;
        }
    
        @media ${device.tablet} {
            width: 70%;
        }
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
            <StyledModal className={'callModal'}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Request Call Modal"
            >
                <h2>Request A Call</h2>
                <div className="modal-column">
                    <form onSubmit={handleSubmit} className="modal-form">
                        <input type="text" name="firstName" placeholder="First Name" required value={contact.firstName} onChange={handleInputChange} />
                        <input type="text" name="lastName" placeholder="Last Name" required value={contact.lastName} onChange={handleInputChange} />
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
