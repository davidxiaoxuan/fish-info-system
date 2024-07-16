import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosConfig';

const FishPage = () => {
  const { fishId } = useParams();
  const [fish, setFish] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/fish/${fishId}/`)
      .then(response => {
        setFish(response.data);
      })
      .catch(error => console.error('Error fetching fish data:', error));
  }, [fishId]);

  if (!fish) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{fish.name}</h1>
      <p>Email: {fish.email}</p>
      <p>Age: {fish.age}</p>
    </div>
  );
};

export default FishPage;
