import React from 'react';
import './RegionPage.css';

const BurrardInletPage = () => {
    return (
        <div className="region-page">
            <h1 className="region-header">Burrard Inlet</h1>
            <div className="region-content">
                <p>Welcome to the Burrard Inlet page. Here you can find information about the fish species found in this area.</p>
                <ul className="region-list">
                    <li><a href="#fish1">Fish Species 1</a></li>
                    <li><a href="#fish2">Fish Species 2</a></li>
                    <li><a href="#fish3">Fish Species 3</a></li>
                </ul>
            </div>
        </div>
    );
};

export default BurrardInletPage;
