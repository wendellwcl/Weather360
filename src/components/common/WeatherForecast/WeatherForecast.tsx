import { useContext } from "react";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Utils
import { convertToCurrentMetric } from "../../../utils/convertToCurrentMetric";

const WeatherForecast = () => {
    const { forecast, metric } = useContext(WeatherContext);

    return (
        <section>
            {forecast?.map((item, index) => (
                <p key={index}>
                    {convertToCurrentMetric(item.temp, metric)} {metric} - {item.weather} - {item.weatherIcon} /{" "}
                    {convertToCurrentMetric(item.tempMin, metric)} - {convertToCurrentMetric(item.tempMax, metric)}
                </p>
            ))}
        </section>
    );
};

export default WeatherForecast;
