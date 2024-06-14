//Styles
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <p className={styles["footer__text"]}>
                Fonte:{" "}
                <a href="https://openweathermap.org/" target="_blank" className={styles["footer__text__link"]}>
                    OpenWeather
                </a>
            </p>
        </footer>
    );
};

export default Footer;
