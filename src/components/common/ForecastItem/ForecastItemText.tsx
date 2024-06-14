//Styles
import styles from "./ForecastItemText.module.scss";

interface IForecastItemTextProps {
    text: string;
}

const ForecastItemText = ({ text }: IForecastItemTextProps) => {
    return <span className={styles["forecast-text"]}>{text}</span>;
};

export default ForecastItemText;
