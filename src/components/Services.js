// React Component
import React, { useState } from 'react';
import '../styles/Services.css'; // Import the CSS file
import CallButton from '../components/CallButton';
import Footer from '../components/Footer';

const Services = () => {
    const [activePage, setActivePage] = useState('Salesforce');

    const handleClick = (page) => {
        setActivePage(page);
    }

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
            <CallButton />
        <Footer />
        </div>
        
        </>
    );
}

const SalesforcePage = () => {
    return (
        <div>
            <h2>Salesforce Page</h2>
            <h5>
                BAOBAB PARTNERS IS PROUD TO BE A SALESFORCE CERTIFIED CONSULTING PARTNER. OUR INTERNATIONAL TEAM IS MADE UP OF PROFESSIONALS WITH DECADES OF COMBINED PLATFORM EXPERIENCE. 
            </h5>
            <h5>
                WHATEVER YOUR NEEDS, WE ARE ON HAND TO HELP DESIGN AND BUILD THE RIGHT SOLUTION FOR YOU.
            </h5>
        </div>
    );
}

const AppDevelopmentPage = () => {
    return (
        <div>
            <h2>CHECK OUT OUR LATEST APP FOR SALESFORCE</h2>
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
    );
}

export default Services;
