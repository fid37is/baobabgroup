import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/About.css';
import { FaArrowLeft } from "react-icons/fa6";

const Button = styled.button`
    margin: 10px;
    `;

    const BackButton = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return <Button className='back-btn' onClick={goBack}><FaArrowLeft /> Back </Button>
    };

    export default BackButton;
