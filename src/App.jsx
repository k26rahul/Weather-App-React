import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import WeatherDetails from './components/WeatherDetails';
import StatusMessage from './components/StatusMessage';

function App() {
  const [city, setCity] = useState('Bengaluru');
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'pending' | 'resolved' | 'rejected'

  // Apologies to the author of https://m-weather.netlify.app/
  // I'm temporarily using your API key and will replace it with my own once it's activated.
  const apiKey = 'fca9e4a88009eda3bc59b644ad4b92b0';

  const handleSearch = e => {
    e.preventDefault();
    fetchWeatherData(city);
  };

  const fetchWeatherData = async city => {
    setStatus('pending');
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
      setStatus('resolved');
    } catch (err) {
      setStatus('rejected');
    }
  };

  return (
    <div className="weather-card">
      <SearchForm city={city} setCity={setCity} handleSearch={handleSearch} />

      {status === 'idle' && (
        <div>Please search for a city to see the weather details.</div>
      )}

      {status === 'pending' && <StatusMessage message="Loading..." />}
      {status === 'rejected' && (
        <StatusMessage message="City not found. Please try again." />
      )}

      {status === 'resolved' && weatherData && (
        <WeatherDetails weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
