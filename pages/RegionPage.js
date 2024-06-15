import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FishList from '../components/FishList';

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
    <div className="container mt-5">
      <h1>Fishes in {regionName}</h1>
      <FishList fishes={fishes} />
    </div>
  );
};

export default RegionPage;
