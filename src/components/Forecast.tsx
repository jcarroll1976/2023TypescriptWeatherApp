import React from 'react'
import { ForecastResponse } from '../models/WeatherInterface'

interface ForecastedWeatherProps {
    forecastedWeather: ForecastResponse
}


function Forecast({forecastedWeather}:ForecastedWeatherProps) {
  return (
    <div>
        {forecastedWeather ? (
            <div>
                <h2>5-Day Forecast</h2>
                <div>
                {forecastedWeather.list.map((forecast,index)=> (
                    <div>
                        <p key={index}>{forecast.dt_txt}</p>
                        <p>{forecast.main.temp.toFixed()}</p>
                        <p><img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt='' /></p>
                    </div>
                ))}
                </div>
            </div>
        ): ("")}
    </div>
  )
}

export default Forecast