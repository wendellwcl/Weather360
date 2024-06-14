import { useContext } from "react";

//Components
import Dashboard from "../../common/Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

//Contexts
import { LoadingContext } from "../../../contexts/LoadingContext";

//Styles
import styles from "./MainScreen.module.scss";

const MainScreen = () => {
    const { loading } = useContext(LoadingContext);

    return (
        <main className={styles["main-screen"]}>
            <Header />

            <div className={styles["main-screen__content"]}>
                {loading && <LoadingScreen />}

                {!loading && <Dashboard />}
            </div>

            <Footer />
        </main>
    );
};

export default MainScreen;
