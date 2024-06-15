import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');

    axios.get(`http://localhost:5000/api/search?query=${query}`)
      .then(response => {
        setResults(response.data);
      })
      .catch(error => console.error('Error fetching search results:', error));
  }, [location.search]);

  return (
    <div>
      <h1>Search Results</h1>
      {results.length > 0 ? (
        results.map(fish => (
          <div key={fish.id}>
            <Link to={`/fish/${fish.id}`}>{fish.name}</Link>
          </div>
        ))
      ) : (
        <p>No results found. Showing closest matches:</p>
      )}
    </div>
  );
};

export default SearchResults;
