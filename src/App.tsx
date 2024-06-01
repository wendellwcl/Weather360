import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

//Contexts
import { LoadingContext } from "./contexts/LoadingContext";
import { WeatherContext } from "./contexts/WeatherContext";

//Utils
import { convertKelvinToCelsius } from "./utils/convertKelvinToCelsius";
import { convertUnixToTime } from "./utils/convertUnixToTime";

import MetricToggleSwitch from "./components/common/MetricToggleSwitch/MetricToggleSwitch";
import { convertToCurrentMetric } from "./utils/convertToCurrentMetric";

type Inputs = {
    locationQuery: string;
};

const App = () => {
    const { loading } = useContext(LoadingContext);
    const {
        setQuery,
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

    const { register, handleSubmit, resetField } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => formSubmit(data);

    function formSubmit(data: Inputs) {
        setQuery(data.locationQuery);
        resetField("locationQuery");
    }

    return (
        <>
            <header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="Buscar cidade" {...register("locationQuery", { required: true })} />
                </form>

                <MetricToggleSwitch />
            </header>

            {loading && <p>Carregando...</p>}

            {!loading && (
                <>
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
                            {convertKelvinToCelsius(item.temp!)} ºC - {item.weather} - {item.weatherIcon} /{" "}
                            {convertKelvinToCelsius(item.tempMin)} - {convertKelvinToCelsius(item.tempMax)}
                        </p>
                    ))}
                </>
            )}
        </>
    );
};

export default App;
