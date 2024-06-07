//Components
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

//Styles
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <CurrentWeather />

            <WeatherDetails />

            <WeatherForecast />
        </div>
    );
};

export default Dashboard;
