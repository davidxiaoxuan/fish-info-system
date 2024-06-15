import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FishList from '../components/FishList';

const RegionPage = () => {
  const { regionName } = useParams();
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    axios.get(`/api/fish?region=${regionName}`)
      .then(response => setFishes(response.data))
      .catch(error => console.error('Error fetching fish data:', error));
  }, [regionName]);

  return (
    <div>
      <h1>Fishes in {regionName}</h1>
      <FishList fishes={fishes} />
    </div>
  );
}

export default RegionPage;
