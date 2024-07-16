import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../api/axiosConfig';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    console.log('Query:', query);  // 添加日志记录

    axiosInstance.get('/search/', { params: { query } })
      .then(response => {
        console.log('Search Results:', response.data);  // 添加日志记录
        setResults(response.data);
        if (response.data.length > 0) {
          const fishId = response.data[0].id;
          navigate(`/fish/${fishId}`);
        }
      })
      .catch(error => console.error('Error fetching search results:', error));
  }, [location.search, navigate]);

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
