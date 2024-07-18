import React from 'react';
import './RegionPage.css';
import FishList from '../components/FishList';

const fishData = [
    {
        id: 'coho-salmon',
        name: 'Coho Salmon',
        description: 'The coho salmon is a species of anadromous fish in the salmon family and one of the five Pacific salmon species. Coho salmon are also known as silver salmon and is often sold as medium red salmon. The scientific species name is based on the Russian common name kizhuch.'
    },
    {
        id: 'chinook-salmon',
        name: 'Chinook Salmon',
        description: 'The Chinook salmon is the largest and most valuable species of Pacific salmon. Its common name is derived from the Chinookan peoples. Other vernacular names for the species include king salmon, Quinnat salmon, Tsumen, spring salmon, chrome hog, Blackmouth, and Tyee salmon.'
    }
];

const StanleyParkPage = () => {
    return (
        <div className="region-page">
            <h1 className="region-header">Stanley Park</h1>
            <div className="region-content">
                <p>Welcome to the Stanley Park page. Here you can find information about the fish species found in this area.</p>
                <FishList fishData={fishData} />
            </div>
        </div>
    );
};

export default StanleyParkPage;
