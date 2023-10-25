import React, { useEffect, useState } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import ApiResponse, { ForecastResponse } from './models/WeatherInterface';
import { fetchForecast, fetchWeather } from './services/WeatherService';
import Search from './components/Search';




export default function App() {
  const [location,setLocation] = useState("");
  const [currentWeather,setCurrentWeather] = useState<ApiResponse>();
  const [forecastWeather,setForecastWeather] = useState<ForecastResponse>();
  const [error,setError] =useState<string | null>(null);

  const filterForecastData = (data: ForecastResponse): ForecastResponse => {
    const filteredData = {
      ...data,
      list: data.list.filter((forecast) => {
        const timestamp = forecast.dt_txt.split(' ')[1];
        return timestamp === "06:00:00" || timestamp === "12:00:00" || timestamp === "00:00:00";
      }),
    };
    return filteredData;
  };

  useEffect(() => {
    setError(null);
    if(location) {
      fetchWeather(location).then(data => {
        setCurrentWeather(data);
      })
      .catch(error => {
        setError("City not found. Please enter a valid city name.");
      });
      fetchForecast(location).then(data => {
        const filteredData = filterForecastData(data);
        setForecastWeather(filteredData);
      })
      .catch(error => {
        setError("City not found. Please enter a valid city name.");
      });
    }
  },[location])

  return (
    <div>
    <Search setLocation={setLocation} />
    {error ? (
      <div className="error-message">{error}</div>
    ) : (
      <div>
        <CurrentWeather currentWeather={currentWeather!} />
        <Forecast forecastedWeather={forecastWeather!} />
      </div>
    )}
  </div>
  )
}

