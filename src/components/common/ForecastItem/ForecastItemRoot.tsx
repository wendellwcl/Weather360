//Interfaces
import { IChildren } from "../../../interfaces/IChildren.interface";

//Styles
import styles from "./ForecastItemRoot.module.scss";

const ForecastItemRoot = ({ children }: IChildren) => {
    return <div className={styles.forecastItemRoot}>{children}</div>;
};

export default ForecastItemRoot;
