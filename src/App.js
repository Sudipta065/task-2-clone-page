import React, { useState, useEffect } from 'react';
import Maps from './components/Maps';
import './App.css';
import useDebounce from './components/useDebounce';
import searchCharacters from './components/searchCharacters';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(
    searchTerm && searchTerm.length > 1,
    1200
  );

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);

      searchCharacters(debouncedSearchTerm).then((results) => {
        setIsSearching(false);

        setResults(results);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <div className='row'>
        <div className='col-sm-4'>
          <div className='form-group'>
            <input
              className='form-control'
              placeholder='Search Location'
              type='text'
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>

          {isSearching && <div>Searching ...</div>}

          {results.map((result) => (
            <div
              className='search'
              key={result.id}
              onClick={() => {
                console.log(result.id);
                fetchPlace(result.id);
              }}
            >
              <h4>{result.address}</h4>
              <div>{result.area}</div>
              <div>{result.city}</div>
            </div>
          ))}
        </div>

        <div className='col-sm-8 map'>
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default App;

const fetchPlace = (id) => {
  const apiKey = 'MTc0MzozUFQwUUQwR0Q4';
  fetch(`https://barikoi.xyz/v1/api/search/geocode/${apiKey}/place/${id}`)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
    });
};
