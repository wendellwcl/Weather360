//Assets
import icon from "../../../assets/svg/icon.svg";

//Styles
import styles from "./LoadingScreen.module.scss";

const LoadingScreen = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.icon}>
                <img src={icon} alt="icone Weather360" />
            </div>

            <span>Carregando...</span>
        </div>
    );
};

export default LoadingScreen;
