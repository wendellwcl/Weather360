import { useContext } from "react";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Utils
import { convertToCurrentMetric } from "../../../utils/convertToCurrentMetric";
import { convertUnixToTime } from "../../../utils/convertUnixToTime";

//Icons
import {
    WiBarometer,
    WiHorizon,
    WiHorizonAlt,
    WiRaindrop,
    WiStrongWind,
    WiThermometer,
    WiThermometerExterior,
} from "react-icons/wi";

//Components
import DetailsItem from "../DetailsItem/DetailsItem";

//Styles
import ValueAndMetricDisplay from "../ValueAndMetricDisplay/ValueAndMetricDisplay";
import styles from "./WeatherDetails.module.scss";

const WeatherDetails = () => {
    const { tempMin, tempMax, metric, humidity, wind, pressure, sunrise, sunset } = useContext(WeatherContext);

    return (
        <section className={styles.weatherDetailsContainer}>
            <h3>Detalhes</h3>

            <div className={styles.weatherDetailsGrid}>
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
                    <DetailsItem.Title icon={<WiHorizonAlt />} title="Nascer do Sol" />
                    <DetailsItem.Content>
                        <p className={styles.time}>{convertUnixToTime(sunrise!)}</p>
                    </DetailsItem.Content>

                    <DetailsItem.Title icon={<WiHorizon />} title="Pôr do Sol" />
                    <DetailsItem.Content>
                        <p className={styles.time}>{convertUnixToTime(sunset!)}</p>
                    </DetailsItem.Content>
                </DetailsItem.Root>
            </div>
        </section>
    );
};

export default WeatherDetails;
