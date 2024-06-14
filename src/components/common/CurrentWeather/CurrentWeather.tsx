import { useContext } from "react";

//Components
import ValueAndMetricDisplay from "../ValueAndMetricDisplay/ValueAndMetricDisplay";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Icons
import { FaLocationDot } from "react-icons/fa6";

//Utils
import { convertToCurrentMetric } from "../../../utils/convertToCurrentMetric";

//Styles
import styles from "./CurrentWeather.module.scss";

const CurrentWeather = () => {
    const { location, weatherDescription, weatherIcon, temp, metric } = useContext(WeatherContext);

    return (
        <section className={styles["current-weather"]}>
            <div className={styles["location"]}>
                <p>
                    <FaLocationDot /> <span>{location}</span>
                </p>
            </div>

            <div className={styles["data"]}>
                <div className={styles["data__temperature"]}>
                    <ValueAndMetricDisplay
                        value={convertToCurrentMetric(temp!, metric) as string | number}
                        metric={metric}
                    />
                </div>

                <div className={styles["data__weather"]}>
                    <div className={styles["icon"]}>{weatherIcon}</div>
                    <span className={styles["description"]}>{weatherDescription}</span>
                </div>
            </div>
        </section>
    );
};

export default CurrentWeather;
