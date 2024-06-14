import { useContext } from "react";

//Components
import Dashboard from "../../common/Dashboard/Dashboard";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

//Contexts
import { LoadingContext } from "../../../contexts/LoadingContext";

//Styles
import styles from "./MainScreen.module.scss";

const MainScreen = () => {
    const { loading, error } = useContext(LoadingContext);

    return (
        <main className={styles["main-screen"]}>
            <Header />

            <div className={styles["main-screen__content"]}>
                {loading && !error && <LoadingScreen />}

                {!loading && !error && <Dashboard />}

                {!loading && error && <ErrorScreen />}
            </div>

            <Footer />
        </main>
    );
};

export default MainScreen;
