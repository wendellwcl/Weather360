import { useContext } from "react";

//Components
import DetailsItem from "../DetailsItem/DetailsItem";
import ValueAndMetricDisplay from "../ValueAndMetricDisplay/ValueAndMetricDisplay";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Icons
import { WiBarometer, WiHorizon, WiRaindrop, WiStrongWind, WiThermometer, WiThermometerExterior } from "react-icons/wi";

//Styles
import styles from "./WeatherDetails.module.scss";

//Utils
import { convertToCurrentMetric } from "../../../utils/convertToCurrentMetric";
import { convertUnixToTime } from "../../../utils/convertUnixToTime";

const WeatherDetails = () => {
    const { tempMin, tempMax, metric, humidity, wind, pressure, sunset } = useContext(WeatherContext);

    return (
        <section className={styles["weather-details"]}>
            <h3 className={styles["weather-details__title"]}>Detalhes</h3>

            <div className={styles["weather-details__grid"]}>
                <DetailsItem.Root>
                    <DetailsItem.Title icon={<WiThermometerExterior />} title="Mínima" />
                    <DetailsItem.Content>
                        <ValueAndMetricDisplay
                            value={convertToCurrentMetric(tempMin!, metric) as string | number}
                            metric={metric}
                            position="top"
                        />
                    </DetailsItem.Content>
                </DetailsItem.Root>

                <DetailsItem.Root>
                    <DetailsItem.Title icon={<WiThermometer />} title="Máxima" />
                    <DetailsItem.Content>
                        <ValueAndMetricDisplay
                            value={convertToCurrentMetric(tempMax!, metric) as string | number}
                            metric={metric}
                            position="top"
                        />
                    </DetailsItem.Content>
                </DetailsItem.Root>

                <DetailsItem.Root>
                    <DetailsItem.Title icon={<WiRaindrop />} title="Humidade" />
                    <DetailsItem.Content>
                        <ValueAndMetricDisplay value={humidity as string | number} metric="%" position="top" />
                    </DetailsItem.Content>
                </DetailsItem.Root>

                <DetailsItem.Root>
                    <DetailsItem.Title icon={<WiStrongWind />} title="Vento" />
                    <DetailsItem.Content>
                        <ValueAndMetricDisplay value={wind as string | number} metric="m/s" position="bottom" />
                    </DetailsItem.Content>
                </DetailsItem.Root>

                <DetailsItem.Root>
                    <DetailsItem.Title icon={<WiBarometer />} title="Pressão" />
                    <DetailsItem.Content>
                        <ValueAndMetricDisplay value={pressure as string | number} metric="hpa" position="bottom" />
                    </DetailsItem.Content>
                </DetailsItem.Root>

                <DetailsItem.Root>
                    <DetailsItem.Title icon={<WiHorizon />} title="Pôr do Sol" />
                    <DetailsItem.Content>
                        <p className={styles["sunset"]}>{convertUnixToTime(sunset!)}</p>
                    </DetailsItem.Content>
                </DetailsItem.Root>
            </div>
        </section>
    );
};

export default WeatherDetails;
