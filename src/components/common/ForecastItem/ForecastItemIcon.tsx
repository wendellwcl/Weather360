import React from "react";

//Styles
import styles from "./ForecastItemIcon.module.scss";

interface ForecastItemIconProps {
    icon: React.ReactNode;
}

const ForecastItemIcon = ({ icon }: ForecastItemIconProps) => {
    return <div className={styles.forecastItemIcon}>{icon}</div>;
};

export default ForecastItemIcon;
