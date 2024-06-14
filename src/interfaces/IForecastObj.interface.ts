import React from "react";

export interface IForecastObj {
    tempMin: number;
    tempMax: number;
    weather: string;
    weatherIcon: React.ReactNode;
}
