import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import btree from '../images/btree.png';
import fdr1 from '../images/fdr1.png';
import certSf from '../images/certSf.png';
import '../styles/About.css';
import CallButton from '../components/CallButton';



    const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        }, []);
    
        return (
        <>
        <div className="heading">
            <h1>About Us</h1>
        </div>
        <div className="abtContainer">
            <div className="text-section">
                <div className="small-text">Get to know us</div>
                <div className="xlarge-text">Our Ethos</div>
                <p> Every part of the baobab tree has a value and a use. We take our name from that tree. In sub-Saharan Africa, where the baobab tree can be found, it is often called the ‘Tree of Life’ and is highly valued both for medicinal/health purposes and for its symbolic meaning. As a species, it is over 200 million years old and has adapted to survive in the Savannah. Despite the dry climate, it is able to grow and bear one of the most nutrient-rich fruits in the world.
        To us, the baobab tree symbolizes a determination to ensure that each and every project we work on is like a baobab tree in four key ways:</p>
        <p>
            It is the best, most efficient, and most effective solution for you and your team. 
        </p>
        <p>
            Every single aspect adds value.
        </p>
        <p>
            It will stand the test of time and help your business continue grow.
        </p>
        <p>
            If there is a difficulty, we will overcome it. We have yet to face a problem we can’t solve.
        </p>
            </div>
            <div className="image-section">
                <img src={btree} alt="sideimg" />
            </div>
        </div>
        <div className="image-background-section">
        <div className="overlay-text">
        <div className="small-text">Be confident in us</div>
                <div className="xlarge-text">Our Approach</div>
                <p>
                    Baobab Partners is a Salesforce.com certified consulting partner based in New York City. We are a team of diverse, dynamic, and qualified professionals with experience across various business areas including Software / Product development, design, testing, maintenance, project management, and staffing options. We believe in developing scalable and simplified solutions based on your organizational goals.
                </p>
                <p>
                    Let our team of administrators, developers, and consultants take care of your project.
                </p>
        </div>
        </div>
        <section className="row-founder">
            <div className="col-founder">
                <img src={fdr1} alt="sideimg" />
            </div>
            <div className="col-founder">
                <div className="small-text">Meet our founders</div>
                <div className="xlarge-text">Our Founders</div>
                <p>
                    Baobab Partners was founded by Stratten Waldt and Oladimeji Abidoye, two Duke University graduates with a passion for building elegant and scalable enterprise applications. They quickly recognized the potential of Salesforce and set about gaining experience as admins, developers, solution architects, project managers, and more before starting the company in 2017.
                </p>
                <p>
                    In the years since, they’ve taken Baobab Partners from a two-person team, working from a home office, to a thriving company with staff across the world that continues to grow. When it was time to begin scaling operations, they looked to Dimeji’s home country, Nigeria. Its capital, Lagos, has a thriving ecosystem of talented and ambitious developers. 
                </p>
                <p>
                    Baobab hired the first two developers of the Lagos team in December of 2018. Since then, that office has grown to more than 20 employees of all experience levels and focus areas, and team members have been added from Kenya, Zambia, South Africa, Côte d’Ivoire, the Dominican Republic, Ireland and the UK, and of course the U.S. and Canada. 
                </p>
                <p>
                    As a team, we have diverse backgrounds rooted in information technology, sales methodology, marketing, organizational development, process improvement, and general business strategy. Whether new to Salesforce or a Salesforce expert upon joining the team, everyone at Baobab Partners is encouraged to keep learning and stay up-to-date with new Salesforce features. Paid weekly training time keeps our team at their peak performance level with both Salesforce native and third-party tech, and mentor-driven sessions and training programs ensure that every team member has a clear path to follow in their growth. Most importantly, we ensure that every team member understands what they are working on, why it is important, and what it may eventually become.
                </p>
            </div>
        </section>
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
