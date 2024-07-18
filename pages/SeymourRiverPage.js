import React from 'react';
import './RegionPage.css';
import FishList from '../components/FishList';

const fishData = [
    {
        id: 'pink-salmon',
        name: 'Pink Salmon',
        description: 'Pink salmon or humpback salmon is a species of euryhaline ray-finned fish in the family Salmonidae. It is the type species of the genus Oncorhynchus, and is the smallest and most abundant of the seven officially recognized species of salmon.'
    },
    {
        id: 'northern-pike',
        name: 'Northern Pike',
        description: 'The northern pike is a species of carnivorous fish of the genus Esox. They are commonly found in moderately salty and fresh waters of the Northern Hemisphere. They are known simply as a pike in Great Britain, Ireland, most of Eastern Europe, Canada and the U.S., although in the Midwest, they may be called a Northern.'
    },
    {
        id: 'african-pike',
        name: 'African Pike',
        description: 'Hepsetus odoe, the African pike characin, is a predatory freshwater characin belonging to the family Hepsetidae.'
    }
];

const SeymourRiverPage = () => {
    return (
        <div className="region-page">
            <h1 className="region-header">Seymour River</h1>
            <div className="region-content">
                <p>Welcome to the Seymour River page. Here you can find information about the fish species found in this area.</p>
                <FishList fishData={fishData} />
            </div>
        </div>
    );
};

export default SeymourRiverPage;
