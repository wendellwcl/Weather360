//Styles
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <span>
                Fonte:{" "}
                <a href="https://openweathermap.org/" target="_blank">
                    OpenWeather
                </a>
            </span>
        </footer>
    );
};

export default Footer;
