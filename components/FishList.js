// src/components/FishList.js
import React from 'react';
import { Link } from 'react-router-dom';

const FishList = ({ fishData = [] }) => {
  return (
    <ul className="region-list">
      {fishData.map(fish => (
        <li key={fish.id}>
          <Link to={`#${fish.id}`}>{fish.name}</Link>
          <p>{fish.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default FishList;
