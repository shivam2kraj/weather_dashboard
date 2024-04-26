import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateRandomWeatherData = () => {
    const randomTemperature = Math.floor(Math.random() * (40 - (-20) + 1)) - 20;
    const randomHumidity = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    const randomWindSpeed = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    return {
      name: city,
      main: {
        temp: randomTemperature,
        humidity: randomHumidity,
      },
      wind: {
        speed: randomWindSpeed,
      }
    };
  };

  const fetchWeatherData = () => {
    setLoading(true);
    // Simulating API call with setTimeout
    setTimeout(() => {
      const data = generateRandomWeatherData();
      setWeatherData(data);
      setLoading(false);
    }, 1000);
  };

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchWeatherData();
    }
  };

  return (
    <div className="container">
      <h1>Weather Dashboard</h1>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Enter city name" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
