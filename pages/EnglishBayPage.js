import React from 'react';
import './RegionPage.css';

const fishData = [
    {
        id: 'shiner-perch',
        name: 'Shiner Perch',
        description: 'This cyprinid is robust with a stout body and is moderately compressed laterally. The body is olive-green with bluish reflections on the back and the sides, and the belly is silvery. Breeding males are tinted with pink over their whole body and have dusky dorsal and caudal fins.'
    },
    {
        id: 'Chinook salmon',
        name: 'Chinook Salmon',
        description: 'The Chinook salmon is the largest and most valuable species of Pacific salmon. Its common name is derived from the Chinookan peoples. Other vernacular names for the species include king salmon, Quinnat salmon, Tsumen, spring salmon, chrome hog, Blackmouth, and Tyee salmon.'
    }
];

const EnglishBayPage = () => {
    return (
        <div className="region-page">
            <h1 className="region-header">English Bay</h1>
            <div className="region-content">
                <p>Welcome to the English Bay page. Here you can find information about the fish species found in this area.</p>
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

export default EnglishBayPage;
