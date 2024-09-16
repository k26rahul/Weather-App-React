import React from 'react';
import './css/WeatherDetails.css';

const getWeatherEmoji = label => {
  switch (label) {
    case 'Thunderstorm':
      return '🌩️';
    case 'Drizzle':
      return '🌦️';
    case 'Rain':
      return '🌧️';
    case 'Snow':
      return '🌨️';
    case 'Mist':
      return '🌫️';
    case 'Smoke':
      return '🌪️';
    case 'Haze':
      return '🌁';
    case 'Dust':
      return '🌵';
    case 'Fog':
      return '🌁';
    case 'Ash':
      return '🌋';
    case 'Squall':
      return '🌬️';
    case 'Tornado':
      return '🌪️';
    case 'Clear':
      return '☀️';
    case 'Clouds':
      return '☁️';
    default:
      return '🌈';
  }
};

function WeatherDetails({ weatherData }) {
  const weatherCondition = weatherData.weather[0].main;
  const city = weatherData.name;
  const country = weatherData.sys.country;

  return (
    <div className="weather-details">
      <div className="location">
        <h1>
          {city}, {country}
        </h1>
      </div>
      <div className="weather-icon">{getWeatherEmoji(weatherCondition)}</div>
      <div className="temperature">{Math.round(weatherData.main.temp)}°C</div>
      <div className="condition">{weatherData.weather[0].description}</div>
      <div className="details">
        <div className="detail">
          <span className="detail-icon">💧</span>
          <span>{weatherData.main.humidity}% Humidity</span>
        </div>
        <div className="detail">
          <span className="detail-icon">💨</span>
          <span>{weatherData.wind.speed} km/h Wind</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
