import React, { useState } from 'react';
import './css/SearchForm.css';
import { randomCities } from './utils';

function SearchForm({ city, setCity, handleSearch }) {
  const getRandomCity = () => {
    const randomIndex = Math.floor(Math.random() * randomCities.length);
    setCity(randomCities[randomIndex]);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <button type="button" className="random-button" onClick={getRandomCity}>
        🎲
      </button>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default SearchForm;
