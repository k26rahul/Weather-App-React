import React from 'react';
import './css/WeatherDetails.css';
import { getWeatherEmoji } from './utils';

const formatTime = timestamp => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

function WeatherDetails({ status, weatherData }) {
  const Message = ({ message }) => <div className="message">{message}</div>;

  if (status === 'idle' || status === 'pending' || status === 'rejected') {
    const messages = {
      idle: 'Please search for a city to see the weather details.',
      pending: 'Loading...',
      rejected: 'City not found. Please try again.'
    };

    return <Message message={messages[status]} />;
  }

  if (status === 'resolved' && weatherData) {
    const weatherCondition = weatherData.weather[0].main;
    const city = weatherData.name;
    const country = weatherData.sys.country;
    const sunrise = formatTime(weatherData.sys.sunrise);
    const sunset = formatTime(weatherData.sys.sunset);

    return (
      <section className="weather-details">

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

        <div className="details">
          <div className="detail">
            <span className="detail-icon">🌅</span>
            <span>Sunrise: {sunrise}</span>
          </div>
          <div className="detail">
            <span className="detail-icon">🌇</span>
            <span>Sunset: {sunset}</span>
          </div>
        </div>

      </section>
    );
  }

  return null;
}

export default WeatherDetails;
