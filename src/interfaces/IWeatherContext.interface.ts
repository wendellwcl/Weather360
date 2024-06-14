import React from "react";

//Interfaces
import { IForecastObj } from "./IForecastObj.interface";

//Types
import { Metrics } from "../types/Metrics.type";

export interface IWeatherContext {
    query: string | undefined;
    setQuery: React.Dispatch<React.SetStateAction<string | undefined>>;
    location: string | undefined;
    weatherDescription: string | undefined;
    weatherIcon: React.ReactNode | undefined;
    temp: number | undefined;
    tempMin: number | undefined;
    tempMax: number | undefined;
    humidity: number | undefined;
    pressure: number | undefined;
    wind: number | undefined;
    sunset: number | undefined;
    forecast: IForecastObj[] | undefined;
    metric: Metrics;
    setMetric: React.Dispatch<React.SetStateAction<Metrics>>;
}
