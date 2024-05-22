    import React from 'react';
    import styled from 'styled-components';
    import Modal from 'react-modal';
    import Footer from '../components/Footer';
    import bf1 from '../images/bf1.png'
    import bf2 from '../images/bf2.png'
    import bf3 from '../images/bf3.png'
    import bf4 from '../images/bf4.png'
    import ofhr1 from '../images/ofhr1.jpg';
    import ohr2 from '../images/ohr2.jpg';
    import '../styles/Foundation.css';
    import CallButton from '../components/CallButton';

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    `;

    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        },
    };
    
    const ModalImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
    filter: contrast(1.2) saturate(1.5);
`;


    const Text = styled.p`
    text-align: left;
    width: 100%;
    padding:15px
    `;

    const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    `;

    const SmallImage = styled.img`
    filter: contrast(1.2) saturate(1.5);
    width: 100px;
    height: auto;
    margin: 10px;
    transition: transform 0.3s ease-in-out;
    &:hover {
    transform: scale(2.1);
    }
    `;

    const OfficeMomentsRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;

const ImageRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const OfficeMomentsTitle = styled.h2`
    text-align: center;
    width: 100%;
    font-size: 32px;
    margin-bottom:50px;
`;

const LargeImage = styled.img`
    filter: contrast(1.2) saturate(1.5);
    width: calc(50% - 10px);
    height: auto;
    animation: moveIn 2s ease-out forwards;

    &:first-child {
        animation-name: moveInFromLeft;
    }

    &:last-child {
        animation-name: moveInFromRight;
    }

    @keyframes moveInFromLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }

    @keyframes moveInFromRight {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }
`;


    function Foundation() {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);

    const images = [
        ofhr1,
        bf2,
        ohr2,
        bf4,
        bf3,
        bf4,
        bf1,
        bf2,
        // Add more image paths as needed
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <>
        <Container>
            <div className="found-row heading">
                <div className="column title-description">
                    <h1>Baobab Foundation</h1>
                    <Text className='glassy-background'>
                        <p>We are committed to giving back to our community and supporting causes that align with our values.</p>
                        <p>As part of this commitment, we have established a non-profit organization dedicated to transforming lives and fostering economic growth by equipping developers from low-income backgrounds in Lagos, Nigeria, with in-demand, marketable skills. Our mission is to bridge the gap between talent and opportunity by providing high-quality, accessible training in Salesforce/CRM, web development, mobile app creation, and other cutting-edge technologies.</p>
                        
                        <p>
                            Through our intensive programs and practical, hands-on approach, our students develop the expertise they need to excel in the fast-paced world of technology, securing well-paid positions and contributing to the growth of the local economy.
                        </p>
                        <p>
                            At EmpowerTech Lagos, we believe that everyone deserves a chance to reach their full potential. By removing financial barriers and offering scholarships to deserving candidates, we strive to create a diverse and inclusive learning environment that empowers our students to overcome challenges, unlock their potential, and transform their lives.
                        </p>
                        <p>
                            To support the non-profit's operations, our company provides both financial resources and employee time. This means that our employees have the opportunity to volunteer their time to support the non-profit's initiatives, and the company provides financial support to cover operating expenses such as rent, utilities, and supplies.
                        </p>
                        <p>
                            By providing both financial and human resources, we are able to ensure that the non-profit can operate efficiently and effectively, while also giving our employees the opportunity to give back to the community and support a cause they are passionate about.
                        </p>
                        <p>
                            Join us in our quest to make a lasting impact on individuals and communities in Lagos, Nigeria, by providing access to world-class tech education and fostering the leaders of tomorrow. Together, we can change the world, one developer at a time.
                        </p>
                    </Text>
                </div>
                
            </div>
            

            <OfficeMomentsRow>
                <OfficeMomentsTitle>Group Moments</OfficeMomentsTitle>
                <ImageRow>
                    <LargeImage src={ofhr1} alt="Large Image 1" />
                    <LargeImage src={ohr2} alt="Large Image 2" />
                </ImageRow>
            </OfficeMomentsRow>

            <ImageContainer>
            {shuffleArray(images).map((src, i) => (
                <SmallImage
                key={i}
                src={src}
                alt={`Small Image ${i + 1}`}
                onClick={() => {
                    setSelectedImage(src);
                    setModalIsOpen(true);
                }}
                />
            ))}


            </ImageContainer>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            contentLabel="Image Modal"
            style={customStyles}
            >
            <ModalImage src={selectedImage} alt="Selected" />
            </Modal>
        </Container>
        <div className="centered-container">
                <CallButton />
            </div>
        <Footer />
        </>
    );
    }

    export default Foundation;
