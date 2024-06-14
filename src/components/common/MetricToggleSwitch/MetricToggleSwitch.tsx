import { useContext, useLayoutEffect } from "react";

//Contexts
import { WeatherContext } from "../../../contexts/WeatherContext";

//Styles
import styles from "./MetricToggleSwitch.module.scss";

//Types
import { Metrics } from "../../../types/Metrics.type";

const MetricToggleSwitch = () => {
    const { setMetric } = useContext(WeatherContext);

    useLayoutEffect(() => {
        const arr: NodeListOf<HTMLInputElement> = document.querySelectorAll(".metric-input");

        for (const el of arr) {
            el.addEventListener("change", (e) => {
                setMetric((e.target as HTMLInputElement).value as Metrics);
                return;
            });
        }
    }, []);

    return (
        <div className={styles["toggle-switch"]}>
            <label htmlFor="celsius" className={styles["toggle-input"]}>
                <input
                    className={`metric-input ${styles["toggle-input__input"]}`}
                    type="radio"
                    name="metric"
                    id="celsius"
                    value="°C"
                    defaultChecked
                />
                <span className={styles["toggle-input__text"]}>°C</span>
            </label>

            <label htmlFor="fahrenheit" className={styles["toggle-input"]}>
                <input
                    className={`metric-input ${styles["toggle-input__input"]}`}
                    type="radio"
                    name="metric"
                    id="fahrenheit"
                    value="°F"
                />
                <span className={styles["toggle-input__text"]}>°F</span>
            </label>
        </div>
    );
};

export default MetricToggleSwitch;
