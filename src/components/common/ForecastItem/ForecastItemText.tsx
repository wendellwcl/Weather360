//Styles
import styles from "./ForecastItemText.module.scss";

interface ForecastItemTextProps {
    text: string;
}

const ForecastItemText = ({ text }: ForecastItemTextProps) => {
    return <span className={styles.forecastItemText}>{text}</span>;
};

export default ForecastItemText;
