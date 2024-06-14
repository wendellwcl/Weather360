//Assets
import icon from "../../../assets/svg/icon.svg";

//Styles
import styles from "./LoadingScreen.module.scss";

const LoadingScreen = () => {
    return (
        <div className={styles["loading"]}>
            <div className={styles["loading__icon"]}>
                <img src={icon} alt="icone Weather360" />
            </div>

            <span className={styles["loading__text"]}>Carregando...</span>
        </div>
    );
};

export default LoadingScreen;
