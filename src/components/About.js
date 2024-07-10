import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fdr1 from '../images/fdr1.png';
import certSf from '../images/certSf.png';
import '../styles/About.css';
import CallButton from '../components/CallButton';
import PageTitle from './PageTitle';



    const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        }, []);
    
        return (
        <>
        <PageTitle 
            title="About Us" 
            subtitle="Discover Our Journey." 
        />
        <div className="image-background-section ethos">
        <div className="overlay-text">
        <div className="small-text">Get to know us</div>
                <div className="xlarge-text">Our Ethos</div>
                    <p> 
                        We take our name from the Baobab Tree, in sub-Saharan Africa, where the baobab tree can be found, it is often called the ‘Tree of Life’.Despite the dry climate, it can grow and bear one of the most nutrient-rich fruits in the world. Every part of the baobab tree has a value and a use. To us, the baobab tree represents our core values on how to approach every project we work on:
                    </p>

                    <p className='ipp'>
                        It is the best, most efficient, and most effective solution for you and your team.
                    </p>
                    <p className='ipp'>
                        Every aspect adds value.
                    </p>
                    <p className='ipp'>
                        It will stand the test of time and help your business grow.
                    </p>
                    <p className='ipp'>
                        If you face a challenge or difficulty, we will work with you to overcome it.
                    </p>
                    <p className='ipp'>
                        We will be there long-term if you need us. We are providing both implementation and managed package services.
                    </p>
            </div>
        </div>  
        <section className="row-founder">
    <div className="col-founder">
        <div className="small-text">Meet our founders</div>
        <div className="xlarge-text">Our Founders</div>
        <div className="col-founder">
        <img src={fdr1} alt="sideimg" />
    </div>
        <div className="row">
            <div className="col">
                <p>
                    Baobab Partners was founded by Stratten Waldt and Oladimeji Abidoye, two Duke University graduates passionate about building elegant and scalable enterprise applications. They quickly recognized the potential of Salesforce and set about gaining experience as admins, developers, solution architects, project managers, and more before starting the company in 2017.
                </p>
                <p>
                    In the years since, they transformed Baobab Partners from a two-person team working from a home office to a successful company with a global staff that is still expanding. When they decided to scale operations, they turned to Dimeji’s native Nigeria. Lagos, its capital, boasts a vibrant community of skilled and driven developers.
                </p>
            </div>
            <div className="col">
                <p>
                    As a team, we have diverse backgrounds rooted in information technology, sales methodology, marketing, organizational development, process improvement, and general business strategy. Whether new to Salesforce or a Salesforce expert upon joining the team, everyone at Baobab Partners is encouraged to keep learning and stay up-to-date with new Salesforce features. Paid weekly training time keeps our team at their peak performance level with both Salesforce native and third-party tech, and mentor-driven sessions and training programs ensure that every team member has a clear path to follow in their growth. Most importantly, we ensure that every team member understands what they are working on, why it is important, and what it may eventually become.

                </p>
            </div>
        </div>
    </div>
</section>
<div className="image-background-section">
        <div className="overlay-text">
                <div className="xlarge-text">Our Team</div>
                <p>
                    Baobab Partners is a Salesforce.com certified consulting partner based in New York City. We are a team of diverse, dynamic, and qualified professionals with experience across various business areas including Software / Product development, design, testing, maintenance, project management, and staffing options. We believe in developing scalable and simplified solutions based on your organizational goals.
                </p>
                <p>
                    Let our team of administrators, developers, and consultants take care of your project.
                </p>
        </div>
        </div>
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

        <div className="centered-container">
                <CallButton />
            </div>
        <Footer />
        </>
        );
    };

    export default About;
