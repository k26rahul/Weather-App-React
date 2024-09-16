import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import WeatherDetails from './components/WeatherDetails';
import { fetchWeatherData } from './fetchWeatherData';

function App() {
  const [city, setCity] = useState('Bengaluru');
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'pending' | 'resolved' | 'rejected'

  const apiKey = 'fca9e4a88009eda3bc59b644ad4b92b0';

  const handleSearch = e => {
    e.preventDefault();
    fetchWeatherData(city, apiKey, setWeatherData, setStatus);
  };

  return (
    <div className="weather-card">
      <SearchForm city={city} setCity={setCity} handleSearch={handleSearch} />
      <WeatherDetails status={status} weatherData={weatherData} />
    </div>
  );
}

export default App;
