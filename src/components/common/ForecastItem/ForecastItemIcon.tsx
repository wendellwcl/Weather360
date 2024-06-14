import { ReactNode } from "react";

//Styles
import styles from "./ForecastItemIcon.module.scss";

interface IForecastItemIconProps {
    icon: ReactNode;
}

const ForecastItemIcon = ({ icon }: IForecastItemIconProps) => {
    return <div className={styles["forecast-icon"]}>{icon}</div>;
};

export default ForecastItemIcon;
