import { useContext } from "react";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Utils
import { convertToCurrentMetric } from "../../../utils/convertToCurrentMetric";

//Icons
import { FaLocationDot } from "react-icons/fa6";

//Components
import ValueAndMetricDisplay from "../ValueAndMetricDisplay/ValueAndMetricDisplay";

//Styles
import styles from "./CurrentWeather.module.scss";

const CurrentWeather = () => {
    const { location, weatherDescription, weatherIcon, temp, tempFeelsLike, metric } = useContext(WeatherContext);

    return (
        <section className={styles.currentWeatherContainer}>
            <div className={styles.locationContainer}>
                <p>
                    <FaLocationDot /> <span>{location}</span>
                </p>
            </div>

            <div className={styles.currentWeather}>
                <div className={styles.weatherData}>
                    <div className={styles.temp}>
                        <ValueAndMetricDisplay
                            value={convertToCurrentMetric(temp!, metric) as string | number}
                            metric={metric}
                        />
                    </div>

                    <div className={styles.descriptionWrapper}>
                        <span className={styles.description}>{weatherDescription}</span>

                        <span className={styles.feelsLike}>
                            Sensação: {convertToCurrentMetric(tempFeelsLike!, metric)} {metric}
                        </span>
                    </div>
                </div>

                <div className={styles.weatherIcon}>{weatherIcon}</div>
            </div>
        </section>
    );
};

export default CurrentWeather;
