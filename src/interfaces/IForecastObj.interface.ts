import React from "react";

export interface IForecastObj {
    temp: number;
    tempMin: number;
    tempMax: number;
    weather: string;
    weatherIcon: React.ReactNode;
}
