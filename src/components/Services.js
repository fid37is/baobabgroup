// React Component
import React, { useState, useEffect } from 'react';
import '../styles/Services.css';
import '../App.css';
import CallButton from '../components/CallButton';
import Footer from '../components/Footer';
import sf001 from '../images/sf001.png';
import sf002 from '../images/sf002.png';
import sf003 from '../images/sf003.png';
import sf004 from '../images/sf004.png';
import sf005 from '../images/sf005.png';
import sf006 from '../images/sf006.png';
import sf007 from '../images/sf007.png';
import gdrive from '../images/gdrive.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    const [activePage, setActivePage] = useState('Salesforce');

    const handleClick = (page) => {
        setActivePage(page);
    }

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
        <div className="services">
            <div className="found-row heading">
                <div className="column-serve">
                    <h1>What We Do</h1>
                </div>
                <div className="column-serve">
                    {/* Empty column */}
                </div>
            </div>
            <div className="row-serve button-container">
                <button className={`button ${activePage === 'Salesforce' ? 'active' : ''}`} onClick={() => handleClick('Salesforce')}>Salesforce</button>
                <button className={`button ${activePage === 'App Development' ? 'active' : ''}`} onClick={() => handleClick('App Development')}>App Development</button>
            </div>

            <div className="content">
                {activePage === 'Salesforce' ? <SalesforcePage /> : <AppDevelopmentPage />}
            </div>
            <div className="centered-container">
                <CallButton />
            </div>
            <Footer />
        </div>
        
        </>
    );
}

const SalesforcePage = () => {
    return (
        <div className='serveContainer'>
        <div className='serve-text'>
            <h2>SALESFORCE SERVICES</h2>
            <p>
                Baobab Partners is proud to be a Salesforce certified consulting partner. Our international team is made up of professionals with decades of combined platform experiences.
            </p>
            <p>
                Whatever your needs, we are on hand to help design and build the right solution for you.
            </p>
        </div>
        <section className="row-servContent">
            <div className="column-servContent" data-aos="fade-right" >
                <img src={sf001} alt="contentImage" />
            </div>
            <div className="column-servContent righText" data-aos="fade-left">
                <h2> SALES PROCESS OPTIMIZATION</h2>
                <p>
                    Does your Sales team often feel that administration processes slow them down?
                </p>
                <p> 
                    We work with you and your sales team to customize your Sales-force environment to make your sales processes fast, efficient, and user friendly, maximizing your teams time to focus on selling.
                </p>
            </div>
        </section>
        <section className="row-servContent">
            <div className="column-servContent righText lefTest" data-aos="fade-left">
                <h2>SERVICE PROCESS OPTIMIZATION</h2>
                <p>
                    In today's world, customers expect your staff to know them and their history with your company from the first time they call in or email for help.
                </p>
                <p> 
                    We can help customise your Salesforce environment so that your staff can access all they need within a few clicks, keeping calls efficient and customers happy.
                </p>
            </div>
            <div className="column-servContent" data-aos="random" >
                <img src={sf004} alt="contentImage" />
            </div>
        </section>
        <section className="row-servContent">
            <div className="column-servContent" data-aos="fade-down" >
                <img src={sf005} alt="contentImage" />
            </div>
            <div className="column-servContent righText" data-aos="fade-up">
                <h2>MARKETING AUTOMATION</h2>
                <p>
                    Gone are the days of un-targeted mass emailing to customers, but that doesn't mean reps should be sending emails one by one: targeted marketing automation can help you reach your customers when they need you with the help they are looking for.
                </p>
                <p> 
                    From designing email templates to full customer journey implementation, we've got you covered!
                </p>
            </div>
        </section>
        <section className="row-servContent">
            <div className="column-servContent righText lefTest" data-aos="zoom-out">
                <h2>TRAINING</h2>
                <p>
                    We’re happy to share our Salesforce knowhow. As well as working to improve your instance, we also offer training in your environment for you and your staff!
                </p>
                <p> 
                    Both group and one-to-one training packages all within your own salesforce environment to ensure you and your staff know how to get the best from your investment in Salesforce.
                </p>
            </div>
            <div className="column-servContent" data-aos="zoom-in" >
                <img src={sf002} alt="contentImage" />
            </div>
        </section>
        <section className="row-servContent">
            <div className="column-servContent" data-aos="fade-down" >
                <img src={sf003} alt="contentImage" />
            </div>
            <div className="column-servContent righText" data-aos="fade-up">
                <h2>DATA CLEANSING</h2>
                <p>
                    Data cleansing helps your team focus on your customer allowing them to find what they need fast, removing duplicates and fixing incomplete data. See the whole picture when looking at a customer's history with your business, without the clutter.
                </p>
            </div>
        </section>
        <section className="row-servContent">
            <div className="column-servContent righText lefTest" data-aos="fade-left">
                <h2>INTEGRATIONS</h2>
                <p>
                    There are thousands of apps that can be integrated into Salesforce - you’re probably using a few already! Connecting them helps your business run more efficiently and limits human errors made when switching between different services.
                </p>
            </div>
            <div className="column-servContent" data-aos="fade-right" >
                <img src={sf006} alt="contentImage" />
            </div>
        </section>
        <section className="row-servContent">
            <div className="column-servContent" data-aos="zoom-out" >
                <img src={sf007} alt="contentImage" />
            </div>
            <div className="column-servContent righText" data-aos="zoom-in">
                <h2>CUSTOM DEVELOPMENT, PORTALS</h2>
                <p>
                    Salesforce can be incredibly flexible, but not every business need is available out-of-the-box. When customization isn’t enough, development can bridge the gap and make sure that your system is perfectly tailored to your needs.
                </p>
                <p>
                    Our experienced team can create everything from custom pricing wizards to document generation portals from scratch.
                </p>
            </div>
        </section>
        </div>
    );
}

const AppDevelopmentPage = () => {
    return (
        <div className='appdev-content'>
            <div className="appdevTitle">
                <h2>CHECK OUT OUR LATEST APP FOR SALESFORCE</h2>
            </div>
            <div className="row-appdev">
                <div className="Col-appdev">
                    <h4>BAOBAB FILES FOR GDRIVE</h4>
                    <p>
                        Salesforce is a powerful tool, and apps can be a great way to customise your org and integrate Salesforce with other products key to your business. Baobab Drive bridges the gap between your Salesforce instance and Google Drive. Using Baobab Files, you can:
                    </p>
                    <ul>
                        <li>
                            Choose which objects will automatically create a corresponding folder in your Drive
                        </li>
                        <li>
                            Automatically nest your drive folders in the same intuitive structure they have in your Salesforce. For example, a Contact's folder will exist within the folder for its primary Account.
                        </li>
                        <li>
                            Place a window into the Drive folder on any record - you never have to leave SF to upload or access the files related to a specific record. This means that even users without access to Drive can view the files they need.
                        </li>
                        <li>
                            Decide how you handle your SF Files. You can choose to have all Files automatically moved to Drive, freeing up valuable SF storage space, or you can have them copied, maintaining access directly in both systems.
                        </li>
                    </ul>
                    <p>
                        Baobab Files for Google Drive isn’t available on the AppExchange just yet, but if you’re interested in testing the product or being one of our early adopters you can reach out to us directly. We’re constantly working to improve our products, and we’d love to hear your feedback. 
                    </p>
                </div>
                <div className="col-appdev">
                    <img src={gdrive} alt="DevImg" />
                </div>
            </div>
        </div>
    );
}

export default Services;
