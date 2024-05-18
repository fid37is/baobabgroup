import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ethos from '../images/ethos.png';
import approach from '../images/approach.png';
import founder from '../images/founder.png';
import united from '../images/united.png';
import certSf from '../images/certSf.png';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin-bottom: 50px;
    gap: 50px;
    `;

    const Row = styled.div`
    display: flex;
    position: relative;
    `;

    const bounce = keyframes`
    0% { transform: translate(0, 0); }
    25% { transform: translate(10px, 0); }
    50% { transform: translate(0, 10px); }
    75% { transform: translate(-10px, 0); }
    100% { transform: translate(0, -10px); }
`;

    const Column = styled.div`
    flex: 1;
    `;

    const Image = styled.img`
    width: 25%;
    height: auto;
    border-radius: 7px;
    float: left;
    margin-right: 20px;
    margin-top: 2.5em;
    animation: ${bounce} 2s infinite;
    `;

    const TextContainer = styled.div`
    padding: 20px;
    line-height: 25px;
    `;

    const IconImage = styled.img`
    width: 3rem;
    margin-right: 1rem;
    background-color: #F7B585;
    border-radius: 50%;
    padding:10px;
    position: relative;
    display: float;
    top: 0;
    left: 0;
    `;

    const About = () => {
    const content = [
        {
        imgSrc: founder,
        title: 'Our Founder',
        description: `Baobab Partners was founded by Stratten Waldt and Oladimeji Abidoye, two Duke University graduates with a passion for building elegant and scalable enterprise applications. They quickly recognized the potential of Salesforce and set about gaining experience as admins, developers, solution architects, project managers, and more before starting the company in 2017.
    

        In the years since, they’ve taken Baobab Partners from a two-person team, working from a home office, to a thriving company with staff across the world that continues to grow. When it was time to begin scaling operations, they looked to Dimeji’s home country, Nigeria. Its capital, Lagos, has a thriving ecosystem of talented and ambitious developers.


        Baobab hired the first two developers of the Lagos team in December of 2018. Since then, that office has grown to more than 20 employees of all experience levels and focus areas, and team members have been added from Kenya, Zambia, South Africa, Côte d’Ivoire, the Dominican Republic, Ireland and the UK, and of course the U.S. and Canada.
        

        As a team, we have diverse backgrounds rooted in information technology, sales methodology, marketing, organizational development, process improvement, and general business strategy. Whether new to Salesforce or a Salesforce expert upon joining the team, everyone at Baobab Partners is encouraged to keep learning and stay up-to-date with new Salesforce features. Paid weekly training time keeps our team at their peak performance level with both Salesforce native and third-party tech, and mentor-driven sessions and training programs ensure that every team member has a clear path to follow in their growth. Most importantly, we ensure that every team member understands what they are working on, why it is important, and what it may eventually become.
        `
        },
        {
        imgSrc: ethos,
        title: 'Our Ethos',
        description: ` 
        Every part of the baobab tree has a value and a use. We take our name from that tree. In sub-Saharan Africa, where the baobab tree can be found, it is often called the ‘Tree of Life’ and is highly valued both for medicinal/health purposes and for its symbolic meaning. As a species, it is over 200 million years old and has adapted to survive in the Savannah. Despite the dry climate, it is able to grow and bear one of the most nutrient-rich fruits in the world.
        To us, the baobab tree symbolizes a determination to ensure that each and every project we work on is like a baobab tree in four key ways: 

        It is the best, most efficient, and most effective solution for you and your team. 

        Every single aspect adds value. 

        It will stand the test of time and help your business continue grow.

        If there is a difficulty, we will overcome it. We have yet to face a problem we can’t solve.
        `,
        },
        {
        imgSrc: approach,
        title: 'Our Approach',
        description: `
        Baobab Partners is a Salesforce.com certified consulting partner based in New York City. We are a team of diverse, dynamic, and qualified professionals with experience across various business areas including Software / Product development, design, testing, maintenance, project management, and staffing options. We believe in developing scalable and simplified solutions based on your organizational goals.

        Let our team of administrators, developers, and consultants take care of your project.
        `,
        },
        // Add more objects as needed
    ];

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        }, []);
    
        return (
        <>
            <Container>
            <div className="found-row heading">
                <div className="column title-description">
                    <h1>About Us</h1>
                </div>
            </div>
            <Row>
                <Column>
                <h2 className='abtTitle'>Our Founder</h2>
                <Image data-aos="fade-up" src={founder} alt="About Founder" />
                <TextContainer>
                    {content[0].description.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                    ))}
                </TextContainer>
                </Column>
            </Row>
            <Row>
                <Column>
                    <TextContainer>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconImage src={united} alt="Icon" />
                        <h2 className='abtTitle'>Our Ethos</h2>
                    </div>
                    {content[1].description.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                    </TextContainer>
                </Column>
            </Row>
            <Row>
                <Column>
                    <TextContainer>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconImage src={united} alt="Icon" />
                        <h2 className='abtTitle'>Our Approach</h2>
                    </div>
                    {content[2].description.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                    ))}
                    </TextContainer>
                </Column>
            </Row>
            <section id="partners">
            <p>We are proud to be a Salesforce certified consulting partner</p>
            <img
            src={certSf}
            alt="Our partners"
            style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "20%",
            }}
            />
        </section>
            </Container>
            <Footer />
        </>
        );
    };

    export default About;
