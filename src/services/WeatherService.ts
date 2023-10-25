import axios from "axios";
import ApiResponse, { ForecastResponse } from "../models/WeatherInterface";

export function fetchWeather(location:string):Promise<ApiResponse> {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e2456e43837a863e3bb5c393f7b26bff`)
    .then(response => response.data)
    
}

export function fetchForecast(location:string):Promise<ForecastResponse> {
    return axios.get<ForecastResponse>(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&exclude=hourly&units=imperial&appid=e2456e43837a863e3bb5c393f7b26bff`)
    .then(response => response.data)
}
