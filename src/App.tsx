import { useContext } from "react";

//Contexts
import { LoadingContext } from "./contexts/LoadingContext";
import { WeatherContext } from "./contexts/WeatherContext";

//Utils
import { convertToCurrentMetric } from "./utils/convertToCurrentMetric";
import { convertUnixToTime } from "./utils/convertUnixToTime";

//Components
import Header from "./components/layout/Header/Header";
import InitialScreen from "./components/layout/InitialScreen/InitialScreen";
import LoadingScreen from "./components/layout/LoadingScreen/LoadingScreen";

const App = () => {
    const { loading } = useContext(LoadingContext);
    const {
        query,
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
        metric,
    } = useContext(WeatherContext);

    if (!query) {
        return <InitialScreen />;
    }

    if (loading) {
        return <LoadingScreen />;
    }

    if (!loading && query) {
        return (
            <>
                <Header />
                <p>location: {location} </p>
                <p>
                    {weatherDescription} - {weatherIcon}
                </p>
                <p>
                    temp: {convertToCurrentMetric(temp!, metric)} {metric}
                </p>
                <p>
                    temp_feels_like: {convertToCurrentMetric(tempFeelsLike!, metric)} {metric}
                </p>
                <p>
                    temp_min: {convertToCurrentMetric(tempMin!, metric)} {metric}
                </p>
                <p>
                    temp_max: {convertToCurrentMetric(tempMax!, metric)} {metric}
                </p>
                <p>humidity: {humidity} %</p>
                <p>pressure: {pressure} hPa</p>
                <p>wind: {wind} m/s</p>
                <p>sunrise: {convertUnixToTime(sunrise!)}</p>
                <p>sunset: {convertUnixToTime(sunset!)}</p>
                {forecast?.map((item, index) => (
                    <p key={index}>
                        {convertToCurrentMetric(item.temp, metric)} ºC - {item.weather} - {item.weatherIcon} /{" "}
                        {convertToCurrentMetric(item.tempMin, metric)} - {convertToCurrentMetric(item.tempMax, metric)}
                    </p>
                ))}
            </>
        );
    }
};

export default App;
