import React from 'react'
import { ForecastResponse } from '../models/WeatherInterface'

interface ForecastedWeatherProps {
    forecastedWeather: ForecastResponse
}


function Forecast({forecastedWeather}:ForecastedWeatherProps) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const month = monthNames[date.getMonth()];
        const hour = date.getHours();
        const minute = date.getMinutes();
        const ampm = hour >= 12 ? "PM" : "AM";
        
        return `${hour === 0 ? 12 : (hour > 12 ? hour - 12 : hour)}${ampm} ${month} ${day}${getDaySuffix(day)}`;
    };

    const getDaySuffix = (day: number) => {
        if (day >= 11 && day <= 13) {
            return "th";
        }
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    };
  return (
    <div>
        {forecastedWeather ? (
            <div>
                <h2>5-Day Forecast</h2>
                <div>
                {forecastedWeather.list.map((forecast,index)=> (
                    <div>
                        <p key={index}>{formatDate(forecast.dt_txt)}</p>
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