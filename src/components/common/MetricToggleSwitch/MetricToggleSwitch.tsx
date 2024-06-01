import { useContext, useLayoutEffect } from "react";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Types
import { Metrics } from "../../../types/Metrics.type";

//Styles
import styles from "./MetricToggleSwitch.module.scss";

const MetricToggleSwitch = () => {
    const { setMetric } = useContext(WeatherContext);

    useLayoutEffect(() => {
        const arr: NodeListOf<HTMLInputElement> = document.querySelectorAll(".metricInput");

        for (const el of arr) {
            el.addEventListener("change", (e) => {
                setMetric((e.target as HTMLInputElement).value as Metrics);
                return;
            });
        }
    }, []);

    return (
        <div className={styles.switchContainer}>
            <label htmlFor="celsius">
                <input className="metricInput" type="radio" name="metric" id="celsius" value="°C" defaultChecked />
                <span>°C</span>
            </label>

            <label htmlFor="fahrenheit">
                <input className="metricInput" type="radio" name="metric" id="fahrenheit" value="°F" />
                <span>°F</span>
            </label>
        </div>
    );
};

export default MetricToggleSwitch;
