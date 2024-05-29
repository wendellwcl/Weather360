import { useContext } from "react";
import { WeatherContext } from "./contexts/WeatherContext";

//Utils
import { convertKelvinToCelsius } from "./utils/convertKelvinToCelsius";
import { convertKelvinToFarenheit } from "./utils/convertKelvinToFarenheit";
import { convertUnixToTime } from "./utils/convertUnixToTime";

const App = () => {
    const {
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
    } = useContext(WeatherContext);

    return (
        <>
            <p>location: {location} </p>
            <p>
                {weatherDescription} - {weatherIcon}
            </p>
            <p>temp: {convertKelvinToCelsius(temp!)} °C</p>
            <p>temp: {convertKelvinToFarenheit(temp!)} °F</p>
            <p>temp_feels_like: {convertKelvinToCelsius(tempFeelsLike!)} °C</p>
            <p>temp_min: {convertKelvinToCelsius(tempMin!)} °C</p>
            <p>temp_max: {convertKelvinToCelsius(tempMax!)} °C</p>
            <p>humidity: {humidity} %</p>
            <p>pressure: {pressure} hPa</p>
            <p>wind: {wind} m/s</p>
            <p>sunrise: {convertUnixToTime(sunrise!)}</p>
            <p>sunset: {convertUnixToTime(sunset!)}</p>
            {forecast?.map((item, index) => (
                <p key={index}>
                    {convertKelvinToCelsius(item.temp!)} ºC - {item.weather} - {item.weatherIcon}
                </p>
            ))}
        </>
    );
};

export default App;
