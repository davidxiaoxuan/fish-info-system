import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search?query=${query}`);
    };

    return (
        <form className="d-flex" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <input
                className="form-control me-2"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a fish..."
                aria-label="Search"
            />
            <button className="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
        </form>
    );
};

export default SearchBar;

