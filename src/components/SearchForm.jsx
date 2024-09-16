import React, { useEffect } from 'react';
import './css/SearchForm.css';
import { randomCities } from './utils';

const getRandomCity = () => {
  return randomCities[Math.floor(Math.random() * randomCities.length)];
};

function SearchForm({ city, setCity, handleSearch }) {
  useEffect(() => {
    setCity(getRandomCity());
  }, [setCity]);

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <button
        type="button"
        className="random-button"
        onClick={() => setCity(getRandomCity())}
      >
        🎲
      </button>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={e => setCity(e.target.value.trim())}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default SearchForm;
