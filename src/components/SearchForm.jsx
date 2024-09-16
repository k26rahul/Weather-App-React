import React, { useState } from 'react';
import './css/SearchForm.css';

const randomCities = [
  // Famous Global Cities
  'New York',
  'London',
  'Tokyo',
  'Sydney',
  'Paris',
  'Berlin',
  'Moscow',
  'Rio de Janeiro',
  'Cape Town',
  'Beijing',

  // Cities in Karnataka
  'Bengaluru',
  'Mysuru',
  'Hubballi',
  'Dharwad',
  'Mangalore',
  'Udupi',
  'Belagavi',
  'Gulbarga',
  'Shimoga',
  'Tumkur',

  // Cities in Other Parts of India
  'Mumbai',
  'Delhi',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
  'Kanpur',
];

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
