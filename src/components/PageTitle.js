import React from 'react';
import './PageTitle.css';

const PageTitle = ({ title, subtitle }) => (
    <div className="pageTitle">
        <h1>{title}</h1>
        <p className='subTitle'>{subtitle}</p>
    </div>
);

export default PageTitle;
