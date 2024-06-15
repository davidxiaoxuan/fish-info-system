import React from 'react';
import { Link } from 'react-router-dom';

const FishList = ({ fishes }) => {
  return (
    <div className="list-group">
      {fishes.map(fish => (
        <Link key={fish.id} to={`/fish/${fish.id}`} className="list-group-item list-group-item-action">
          {fish.name}
        </Link>
      ))}
    </div>
  );
};

export default FishList;
