import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FishList from '../components/FishList';
import './RegionPage.css';

const RegionPage = () => {
  const { regionName } = useParams();
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    axios.get(`/data/fishData.json`)
      .then(response => {
        const regionData = response.data[regionName];
        setFishes(regionData || []);
      })
      .catch(error => console.error('Error fetching fish data:', error));
  }, [regionName]);

  return (
    <div className="region-page">
      <h1 className="region-header">Fishes in {regionName.replace('-', ' ')}</h1>
      <div className="region-content">
        <FishList fishes={fishes} />
      </div>
    </div>
  );
};

export default RegionPage;
