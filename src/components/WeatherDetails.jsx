import React from 'react';
import './css/WeatherDetails.css';
import { getWeatherEmoji } from './utils';

function WeatherDetails({ status, weatherData }) {
  const Message = ({ message }) => <div className="message">{message}</div>;

  if (status === 'idle' || status === 'pending' || status === 'rejected') {
    return (
      <Message
        message={
          status === 'idle'
            ? 'Please search for a city to see the weather details.'
            : status === 'pending'
            ? 'Loading...'
            : 'City not found. Please try again.'
        }
      />
    );
  }

  if (status === 'resolved' && weatherData) {
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

  return null;
}

export default WeatherDetails;
