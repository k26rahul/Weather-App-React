export const getWeatherEmoji = label => {
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

export const randomCities = [
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
