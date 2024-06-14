//Styles
import styles from "./ValueAndMetricDisplay.module.scss";

interface IValueAndMetricDisplayProps {
    value: string | number;
    metric: string;
    position?: "top" | "bottom";
}

const ValueAndMetricDisplay = ({ value, metric, position }: IValueAndMetricDisplayProps) => {
    return (
        <div className={styles["value-and-metric"]}>
            <div className={styles["value-and-metric__value"]}>
                <p>{value}</p>
                <p className={`${styles["value-and-metric__metric"]} ${position}`}>{metric}</p>
            </div>
        </div>
    );
};

export default ValueAndMetricDisplay;
