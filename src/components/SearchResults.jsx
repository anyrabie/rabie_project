
import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ searchResults }) => {
  return (
    <div className="search-results">
      {searchResults.map((result) => (
        <div key={result.id} className="search-result-item">
          <Link to={`/food/${result.id}`}>{result.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
