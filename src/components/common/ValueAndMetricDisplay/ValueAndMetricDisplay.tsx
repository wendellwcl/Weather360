//Types

//Styles
import styles from "./ValueAndMetricDisplay.module.scss";

interface ValueAndMetricDisplayProps {
    value: string | number;
    metric: string;
    position?: "top" | "bottom";
}

const ValueAndMetricDisplay = ({ value, metric, position }: ValueAndMetricDisplayProps) => {
    return (
        <div className={styles.valueAndMetricContainer}>
            <div className={styles.value}>
                <p>{value}</p>
                <p className={`${styles.metric} ${position}`}>{metric}</p>
            </div>
        </div>
    );
};

export default ValueAndMetricDisplay;
