import { useContext } from "react";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Utils
import { convertToCurrentMetric } from "../../../utils/convertToCurrentMetric";

const CurrentWeather = () => {
    const { location, weatherDescription, weatherIcon, temp, tempFeelsLike, metric } = useContext(WeatherContext);

    return (
        <section>
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
        </section>
    );
};

export default CurrentWeather;
