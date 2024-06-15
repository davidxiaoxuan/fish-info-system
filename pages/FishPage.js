import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FishPage = () => {
  const { fishId } = useParams();
  const [fish, setFish] = useState(null);

  useEffect(() => {
    axios.get(`/data/fishData.json`)
      .then(response => {
        const allFishes = Object.values(response.data).flat();
        const fishData = allFishes.find(f => f.id === parseInt(fishId));
        setFish(fishData);
      })
      .catch(error => console.error('Error fetching fish data:', error));
  }, [fishId]);

  if (!fish) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{fish.name}</h1>
      <p>{fish.description}</p>
      <img src={fish.imageUrl} alt={fish.name} className="img-fluid" />
    </div>
  );
};

export default FishPage;
