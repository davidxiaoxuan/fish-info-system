import React from 'react';
import './RegionPage.css';

const fishData = [
    {
        id: 'spiny-dogfish',
        name: 'Spiny dogfish',
        description: 'The spiny dogfish, spurdog, mud shark, or piked dogfish is one of the best known species of the Squalidae family of sharks, which is part of the Squaliformes order. While these common names may apply to several species, Squalus acanthias is distinguished by two spines and no anal fin.'
    }
];

const BurrardInletPage = () => {
    return (
        <div className="region-page">
            <h1 className="region-header">Burrard Inlet</h1>
            <div className="region-content">
                <p>Welcome to the Burrard Inlet page. Here you can find information about the fish species found in this area.</p>
                <ul className="region-list">
                    {fishData.map(fish => (
                        <li key={fish.id}>
                            <a href={`#${fish.id}`}>{fish.name}</a>
                            <p>{fish.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BurrardInletPage;
