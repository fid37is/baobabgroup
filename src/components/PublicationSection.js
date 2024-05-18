import React from 'react';
import './PublicationSection.css'; // Import your CSS file

const PublicationSection = ({ posts }) => {
    return (
        <div className="publication-section">
        <h1>Our Latest News and Social Media Post</h1>
        <div className="pubcard-container">
            {Array.isArray(posts) && posts.map((post, index) => (
            <a href={post.url} key={index} className="pubCard" target="_blank" rel="noopener noreferrer">
                <img src={post.image} alt="post" className="pubCard-image" />
                <div className="pubCard-info">
                <div className="icon-time">
                <div className="pub-icon">{post.icon}</div>
                    <p>{post.time}</p>
                </div>
                <h2 className="pubcard-title">{post.title}</h2>
                <p className="pubcard-text">{post.text}</p>
                </div>
            </a>
            ))}
        </div>
        </div>
    );
};

export default PublicationSection;
