import { useContext } from "react";

//Contexts
import { LoadingContext } from "../../../contexts/LoadingContext";

//Components
import Dashboard from "../../common/Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

//Styles
import styles from "./MainScreen.module.scss";

const MainScreen = () => {
    const { loading } = useContext(LoadingContext);

    return (
        <main className={styles.dashboardContainer}>
            <Header />

            <div className={styles.content}>
                {loading && <LoadingScreen />}

                {!loading && <Dashboard />}
            </div>

            <Footer />
        </main>
    );
};

export default MainScreen;
