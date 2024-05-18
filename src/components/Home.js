    import React, { useState, useEffect, useRef } from "react";
    import { FaX } from "react-icons/fa6";
    import "../styles/Home.css";
    import BackgroundImg from "../images/BackgroundImg.png";
    import dummyPosts from "../components/DummyPosts";
    import Accordion from "./Accordion";
    import sales from "../servImgs/sales.png";
    import integrate from "../servImgs/integrate.png";
    import data from "../servImgs/data.png";
    import market from "../servImgs/market.png";
    import service from "../servImgs/service.png";
    import staff from "../servImgs/staff.png";
    import custom from "../servImgs/custom.png";
    import floatImg from "../images/floatImg.png";
    import accordionData from "./AccordionData";
    import AOS from "aos";
    import "aos/dist/aos.css";
    import FeedBackItems from "../components/FeedBackItems";
    import CardContainer from "../components/CardContainer";
    import PublicationSection from "../components/PublicationSection";
    import Carousel from "../components/Carousel";
    import certSf from "../images/certSf.png";
    import Team from "../components/Team";
    import TeamCarousel from "../components/TeamCarousel";
    import "../components/TeamCarousel.css";
    import Footer from '../components/Footer';

    const Home = ({ posts }) => {
    const text = "CREATE - CONNECT - GROW";
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const images = [sales, service, market, staff, data, integrate, custom];

    useEffect(() => {
        const timeoutId = setTimeout(
        () => {
            setDisplayText((prev) => prev + text[index]);
            if (index === text.length - 0) {
            setDisplayText("");
            setIndex(0);
            } else {
            setIndex((prev) => prev + 1);
            }
        },
        index === text.length - 0 ? 1200 : 200
        ); // Increase delay when resetting
        return () => clearTimeout(timeoutId);
    }, [index, displayText]);
    useEffect(() => {
        AOS.init({
        duration: 2000,
        });
    }, []);

    const [isFormVisible, setIsFormVisible] = useState(true);

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };




    const formRef = useRef(null);

    useEffect(() => {
        const formElement = formRef.current;

        const observer = new IntersectionObserver((entries) => {
        // Loop over the entries
        entries.forEach((entry) => {
            // If the element is visible
            if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add("slide-in");
            } else {
            // Remove the animation class
            entry.target.classList.remove("slide-in");
            }
        });
        });

        if (formElement) {
        observer.observe(formElement);
        }

        return () => {
        if (formElement) {
            observer.unobserve(formElement);
        }
        };
    }, []);

    return (
        <>
        <section className="first-section">
            <div className="image-overlay-container">
            <img
                src={BackgroundImg}
                alt="Background"
                className="background-image"
                style={{
                filter: "brightness(0.8)",
                borderRadius: "10px",
                height: "100%",
                marginTop: "5%",
                marginLeft: "-50%",
                }}
            />
            <div className="overlay">
                <h1>{displayText}</h1>
                <p>
                We create custom technology solutions to meet your company’s need
                and help you grow
                </p>
            </div>
            </div>
        </section>
        <div className="parent-container">
        {isFormVisible ? (
        <section className="form-overlay">
            <div className="form-container">
            <h2>Request A Free Exploration Call</h2>
            <form>
                <div className="form-row">
                <div className="form-group">
                    <input type="text" placeholder="Name" />
                    <input type="tel" placeholder="Phone" />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Company" />
                </div>
                <div className="form-group">
                    <textarea placeholder="Your message ..."></textarea>
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
                </div>
            </form>
            </div>
        </section>
        ) : null}
            <button className="request-call-button" onClick={toggleFormVisibility}>
        {isFormVisible ? <FaX /> : 'Request A Call'}
        </button>
        </div>
        <section className="image-carousel">
            <div>
            <Carousel />
            </div>
        </section>
        <section
            className="accordion-section"
            style={{ backgroundImage: `url(${floatImg})` }}
        >
            <h1>Our Services</h1>
            <p>
            Our international team has a diverse knowledge of everything IT and a
            passion for business which drives us to build innovative custom
            solutions for all.
            </p>
            {accordionData.map((item, i) => (
            <Accordion
                key={i}
                title={item.title}
                content={item.content}
                image={images[i]}
            />
            ))}
        </section>
        <section className="experience-section">
            <h1>Experience unmatched software Technical Expertise with us</h1>
            <p>
            Our team possesses a robust technical proficiency in a variety of
            areas.
            </p>
            <div className="content-area">
            <div className="empty-column"></div>
            <div className="text-container">
                <div className="row-xp" data-aos="fade-right">
                <h2>Salesforce/CRM implementation and customization</h2>
                <p>
                    We specialize in Salesforce/CRM implementation and
                    customization, helping businesses streamline their customer
                    relationship management and drive growth.
                </p>
                </div>
                <div className="row-xp" data-aos="fade-left">
                <h2>Web Development</h2>
                <p>
                    Our expertise extends to web development, where we create
                    responsive and user-friendly websites that meet the unique needs
                    of each client. <br></br> In the realm of mobile app creation, we design
                    and develop innovative applications for various platforms,
                    enhancing user engagement and satisfaction.
                </p>
                </div>
                <div className="loneText" data-aos="zoom-in">
                <h5>
                    Beyond these, we continually explore and adopt cutting-edge
                    technologies to deliver solutions that keep our clients at the
                    forefront of their industries.”
                </h5>
                </div>
            </div>
            </div>
        </section>
        <section className="feedback-section">
            <h1 className="center">
            Delivering exceptional customer experience and outcomes
            </h1>
            <p className="center">
            Our customers are not only satisfied, but are also thriving. Don’t
            take our word for it, see what they have to say and explore our
            success stories.
            </p>
            <CardContainer FeedBackItems={FeedBackItems} />
        </section>
        <section className="request-section">
            <div className="column">
            <h2>Request for our Whitepaper</h2>
            </div>
            <div className="column">
            <div className="email-collection">
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                />
                <button type="submit">Send</button>
            </div>
            </div>
        </section>
        <section className="publication-section">
            <PublicationSection posts={dummyPosts} />
        </section>
        <section id="partners">
            <h1>Our Partners</h1>
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
        <section className="teamSection">
            <h2>Meet The Team</h2>
            <p className="desc">Our team comprises a diverse group of talented individuals whose expertise drives our organization forward.</p>
            <Team />
            <div className="carouselContainer">
            <TeamCarousel />
            </div>
        </section>
        <section className="footerSection">
            <Footer />
        </section>
        
        </>
    );
    };

    export default Home;
