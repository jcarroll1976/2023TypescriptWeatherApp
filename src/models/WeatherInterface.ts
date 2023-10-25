import React from "react";

export interface Coordinates {
    lat: number,
    lon: number
}

export default interface ApiResponse {
    coord: Coordinates,
    weather: Weather[],
    main: Main,
    wind: Wind,
    name:string,
}

export interface Weather {
    main: string,
    icon: string
}

export interface Main {
    temp: number,
    feels_like: number
}

export interface Wind {
    speed: number
}

export interface ForecastResponse {
    list: List[],
    name: string
}

export interface List {
    main: Main,
    weather: Weather[],
    wind: Wind,
    dt_txt: string
}