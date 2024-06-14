import { useContext } from "react";

//Contexts
import { LoadingContext } from "../../../contexts/LoadingContext";

//Icons
import { BiError } from "react-icons/bi";

//Styles
import styles from "./ErrorScreen.module.scss";

const ErrorScreen = () => {
    const { error } = useContext(LoadingContext);

    return (
        <div className={styles["error"]}>
            <div className={styles["error__icon"]}>
                <BiError />
            </div>

            <span className={styles["error__text"]}>{error}</span>
        </div>
    );
};

export default ErrorScreen;
