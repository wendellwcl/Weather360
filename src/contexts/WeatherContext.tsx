import { createContext, useContext, useEffect, useState } from "react";

//Contexts
import { LoadingContext } from "./LoadingContext";

//Services
import { fetchForecast, fetchWeather } from "../services/openWeatherApi";

//Utils
import { handleForecastData } from "../utils/handleForecastData";
import { handleWeatherIcon } from "../utils/handleWeatherIcon";

//Interfaces
import { IChildren } from "../interfaces/IChildren.interface";
import { IForecastObj } from "../interfaces/IForecastObj.interface";
import { IWeatherContext } from "../interfaces/IWeatherContext.interface";

//Types
import { Metrics } from "../types/Metrics.type";

const DEFAULT_VALUE: IWeatherContext = {
    query: undefined,
    setQuery: () => {},
    location: undefined,
    weatherDescription: undefined,
    weatherIcon: undefined,
    temp: undefined,
    tempMin: undefined,
    tempMax: undefined,
    humidity: undefined,
    pressure: undefined,
    wind: undefined,
    sunset: undefined,
    forecast: undefined,
    metric: "°C",
    setMetric: () => {},
};

export const WeatherContext = createContext<IWeatherContext>(DEFAULT_VALUE);

const WeatherContextProvider = ({ children }: IChildren) => {
    const { setLoading, setError } = useContext(LoadingContext);

    const [query, setQuery] = useState<string | undefined>(undefined);
    const [location, setLocation] = useState<string | undefined>(undefined);
    const [weatherDescription, setWeatherDescription] = useState<string | undefined>(undefined);
    const [weatherIcon, setWeatherIcon] = useState<React.ReactNode | undefined>(undefined);
    const [temp, setTemp] = useState<number | undefined>(undefined);
    const [tempMin, setTempMin] = useState<number | undefined>(undefined);
    const [tempMax, setTempMax] = useState<number | undefined>(undefined);
    const [humidity, setHumidity] = useState<number | undefined>(undefined);
    const [pressure, setPressure] = useState<number | undefined>(undefined);
    const [wind, setWind] = useState<number | undefined>(undefined);
    const [sunset, setSunset] = useState<number | undefined>(undefined);
    const [forecast, setForecast] = useState<IForecastObj[] | undefined>(undefined);
    const [metric, setMetric] = useState<Metrics>("°C");

    useEffect(() => {
        async function fecthData() {
            if (query) {
                setError(null);
                setLoading(true);

                const weather = await fetchWeather(query);
                const forecast = await fetchForecast(query);

                if (weather.error || forecast.error) {
                    setError(weather.error.message || forecast.error.message);
                    setLoading(false);
                } else {
                    setLocation(weather.name);
                    setWeatherDescription(weather.weather[0].description);
                    setWeatherIcon(handleWeatherIcon(weather.weather[0].icon));
                    setTemp(weather.main.temp);
                    setTempMin(weather.main.temp_min);
                    setTempMax(weather.main.temp_max);
                    setHumidity(weather.main.humidity);
                    setPressure(weather.main.pressure);
                    setWind(weather.wind.speed);
                    setSunset(weather.sys.sunset);
                    setForecast(handleForecastData(forecast.list));

                    setLoading(false);
                }
            }
        }

        fecthData();
    }, [query]);

    const CONTEXT_VALUE = {
        query,
        setQuery,
        location,
        weatherDescription,
        weatherIcon,
        temp,
        tempMin,
        tempMax,
        humidity,
        pressure,
        wind,
        sunset,
        forecast,
        metric,
        setMetric,
    };

    return <WeatherContext.Provider value={CONTEXT_VALUE}>{children}</WeatherContext.Provider>;
};

export default WeatherContextProvider;
