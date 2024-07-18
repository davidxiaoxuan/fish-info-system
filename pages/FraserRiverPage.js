import React from 'react';
import './RegionPage.css';

const fishData = [
    {
        id: 'white-sturgeon',
        name: 'White sturgeon',
        description: 'The white sturgeon is like no other fish! Instead of scales, five rows of bony plates (scutes) reach from its gills to its tail, covering its sandpaperlike skin. It also has sharklike qualities, including a cartilaginous skeleton and a sharklike tail.'
    },
    {
        id: 'chum-salmon',
        name: 'Chum Salmon',
        description: 'The chum salmon, also known as dog salmon or keta salmon, is a species of anadromous salmonid fish from the genus Oncorhynchus native to the coastal rivers of the North Pacific and the Beringian Arctic, and is often marketed under the trade name silverbrite salmon in North America.'
    },
    {
        id: 'coho-salmon',
        name: 'Coho Salmon',
        description: 'The coho salmon is a species of anadromous fish in the salmon family and one of the five Pacific salmon species. Coho salmon are also known as silver salmon and is often sold as medium red salmon. The scientific species name is based on the Russian common name kizhuch.'
    }
];

const FraserRiverPage = () => {
    return (
        <div className="region-page">
            <h1 className="region-header">Fraser River</h1>
            <div className="region-content">
                <p>Welcome to the Fraser River page. Here you can find information about the fish species found in this area.</p>
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

export default FraserRiverPage;

