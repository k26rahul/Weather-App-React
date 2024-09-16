# Weather App

A simple React weather app built with Vite. Uses state, caching, and OpenWeatherMap API for real-time weather data. No CSS library used.

## How to Run

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.

## API

This app fetches real-time weather data from the [OpenWeatherMap API](https://openweathermap.org/api). Replace the API key in the `fetchWeatherData.js` file with your own.

## Folder Structure

```
└───src
    │   App.css
    │   App.jsx
    │   fetchWeatherData.js
    │   main.jsx
    │
    ├───assets
    └───components
        │   SearchForm.jsx
        │   utils.js
        │   WeatherDetails.jsx
        │
        └───css
                SearchForm.css
                WeatherDetails.css
```
