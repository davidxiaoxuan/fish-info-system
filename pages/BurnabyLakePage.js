import React from 'react';
import './RegionPage.css';
import FishList from '../components/FishList';

const fishData = [
    {
        id: 'largemouth-bass',
        name: 'Largemouth bass',
        description: 'The largemouth bass is a carnivorous freshwater ray-finned fish in the Centrarchidae family, native to the eastern and central United States, southeastern Canada and northern Mexico.'
    },
    {
        id: 'common-carp',
        name: 'Common Carp',
        description: 'The common carp is a heavy-bodied minnow with barbels on either side of the upper jaw. Typically, color varies from brassy green or yellow, to golden brown, or even silvery. The belly is usually yellowish-white.'
    },
    {
        id: 'rainbow-trout',
        name: 'Rainbow trout',
        description: 'The rainbow trout is a species of trout native to cold-water tributaries of the Pacific Ocean in North America and Asia. The steelhead is an anadromous form of the coastal rainbow trout or Columbia River redband trout that usually returns to freshwater to spawn after living two to three years in the ocean.'
    }
];

const BurnabyLakePage = () => {
    return (
        <div className="region-page">
            <h1 className="region-header">Burnaby Lake</h1>
            <div className="region-content">
                <p>Welcome to the Burnaby Lake page. Here you can find information about the fish species found in this area.</p>
                <FishList fishData={fishData} />
            </div>
        </div>
    );
};

export default BurnabyLakePage;
