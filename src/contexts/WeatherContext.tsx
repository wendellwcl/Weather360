import { createContext, useEffect, useState } from "react";

//Services
import { fetchForecast, fetchWeather } from "../services/openWeatherApi";

//Utils
import { handleForecastData } from "../utils/handleForecastData";
import { handleWeatherIcon } from "../utils/handleWeatherIcon";

//Interfaces
import { IChildren } from "../interfaces/IChildren.interface";
import { IForecastObj } from "../interfaces/IForecastObj.interface";
import { IWeatherContext } from "../interfaces/IWeatherContext.interface";

const DEFAULT_VALUE: IWeatherContext = {
    location: undefined,
    weatherDescription: undefined,
    weatherIcon: undefined,
    temp: undefined,
    tempFeelsLike: undefined,
    tempMin: undefined,
    tempMax: undefined,
    humidity: undefined,
    pressure: undefined,
    wind: undefined,
    sunrise: undefined,
    sunset: undefined,
    forecast: undefined,
};

export const WeatherContext = createContext<IWeatherContext>(DEFAULT_VALUE);

const WeatherContextProvider = ({ children }: IChildren) => {
    const [location, setLocation] = useState<string | undefined>(undefined);
    const [weatherDescription, setWeatherDescription] = useState<string | undefined>(undefined);
    const [weatherIcon, setWeatherIcon] = useState<React.ReactNode | undefined>(undefined);
    const [temp, setTemp] = useState<number | undefined>(undefined);
    const [tempFeelsLike, setTempFeelsLike] = useState<number | undefined>(undefined);
    const [tempMin, setTempMin] = useState<number | undefined>(undefined);
    const [tempMax, setTempMax] = useState<number | undefined>(undefined);
    const [humidity, setHumidity] = useState<number | undefined>(undefined);
    const [pressure, setPressure] = useState<number | undefined>(undefined);
    const [wind, setWind] = useState<number | undefined>(undefined);
    const [sunrise, setSunrise] = useState<number | undefined>(undefined);
    const [sunset, setSunset] = useState<number | undefined>(undefined);
    const [forecast, setForecast] = useState<IForecastObj[] | undefined>(undefined);

    useEffect(() => {
        async function fecthData() {
            const weather = await fetchWeather();
            const forecast = await fetchForecast();

            setLocation(weather.name);
            setWeatherDescription(weather.weather[0].description);
            setWeatherIcon(handleWeatherIcon(weather.weather[0].icon));
            setTemp(weather.main.temp);
            setTempFeelsLike(weather.main.feels_like);
            setTempMin(weather.main.temp_min);
            setTempMax(weather.main.temp_max);
            setHumidity(weather.main.humidity);
            setPressure(weather.main.pressure);
            setWind(weather.wind.speed);
            setSunrise(weather.sys.sunrise);
            setSunset(weather.sys.sunset);
            setForecast(handleForecastData(forecast.list));
        }

        fecthData();
    }, []);

    const CONTEXT_VALUE = {
        location,
        weatherDescription,
        weatherIcon,
        temp,
        tempFeelsLike,
        tempMin,
        tempMax,
        humidity,
        pressure,
        wind,
        sunrise,
        sunset,
        forecast,
    };

    return <WeatherContext.Provider value={CONTEXT_VALUE}>{children}</WeatherContext.Provider>;
};

export default WeatherContextProvider;
