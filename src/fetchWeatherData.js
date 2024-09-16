const getCache = () => {
  const cachedData = localStorage.getItem('weatherCache');
  return cachedData ? JSON.parse(cachedData) : {};
};

const updateCache = (city, data) => {
  const cache = getCache();
  const timestamp = new Date().getTime();
  cache[city.toLowerCase()] = { data, timestamp };
  localStorage.setItem('weatherCache', JSON.stringify(cache));
};

// Cache duration in milliseconds (10 minutes)
const CACHE_DURATION = 10 * 60 * 1000;

export const fetchWeatherData = async (
  city,
  apiKey,
  setWeatherData,
  setStatus
) => {
  const cache = getCache();
  const cachedEntry = cache[city.toLowerCase()];

  if (cachedEntry) {
    const now = new Date().getTime();
    if (now - cachedEntry.timestamp < CACHE_DURATION) {
      setWeatherData(cachedEntry.data);
      setStatus('resolved');
      return;
    }
  }

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
    updateCache(city, data);
  } catch (err) {
    setStatus('rejected');
  }
};
