import React from 'react';
import './EnglishBayPage.css';

const EnglishBayPage = () => {
    return (
        <div className="english-bay-page">
            <h1 className="english-bay-header">English Bay</h1>
            <div className="english-bay-content">
                <p>Welcome to the English Bay page. Here you can find information about the fish species found in this area.</p>
                <ul className="english-bay-list">
                    <li><a href="#shiner-perch">Shiner Perch</a></li>
                </ul>
            </div>
        </div>
    );
};

export default EnglishBayPage;
