import React from 'react';
import './RegionPage.css';

const fishData = [
    {
        id: 'coho-salmon',
        name: 'Coho Salmon',
        description: 'The coho salmon is a species of anadromous fish in the salmon family and one of the five Pacific salmon species. Coho salmon are also known as silver salmon and is often sold as medium red salmon. The scientific species name is based on the Russian common name kizhuch.'
    }
];

const CapilanoRiverPage = () => {
    return (
        <div className="region-page">
            <h1 className="region-header">Capilano River</h1>
            <div className="region-content">
                <p>Welcome to the Capilano River page. Here you can find information about the fish species found in this area.</p>
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

export default CapilanoRiverPage;
