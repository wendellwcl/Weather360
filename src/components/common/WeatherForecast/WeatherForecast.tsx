import { useContext } from "react";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Components
import ForecastItem from "../ForecastItem/ForecastItem";

//Utils
import { convertToCurrentMetric } from "../../../utils/convertToCurrentMetric";
import { getNextWeekdays } from "../../../utils/getNextWeekdays";

//Styles
import styles from "./WeatherForecast.module.scss";

const WeatherForecast = () => {
    const { forecast, metric } = useContext(WeatherContext);
    const sequenceOfTheWeekdays = getNextWeekdays();

    return (
        <section className={styles["forecast"]}>
            <h3 className={styles["forecast__title"]}>Previsão</h3>

            <div className={styles["forecast__c-cards"]}>
                {forecast?.map((item, index) => (
                    <ForecastItem.Root key={index}>
                        <ForecastItem.Text text={sequenceOfTheWeekdays[index]} />

                        <ForecastItem.Icon icon={item.weatherIcon} />

                        <ForecastItem.Text
                            text={`${convertToCurrentMetric(item.tempMin, metric)}° /
                            ${convertToCurrentMetric(item.tempMax, metric)}°`}
                        />

                        <ForecastItem.Text text={item.weather} />
                    </ForecastItem.Root>
                ))}
            </div>
        </section>
    );
};

export default WeatherForecast;
