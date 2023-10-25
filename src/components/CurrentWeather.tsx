import React from 'react'
import ApiResponse from '../models/WeatherInterface';

interface CurrentWeatherProps {
    currentWeather: ApiResponse | null
       
}

function CurrentWeather({currentWeather}:CurrentWeatherProps) {
    return (
        <div>
            {currentWeather ? (
            <div>
                <h1>{currentWeather.name}</h1>
                <p>{currentWeather.main.temp.toFixed()}</p>
                <p><img src ={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt=''/></p>
            </div>
        ): ("")}
        </div> 
        )
}

export default CurrentWeather