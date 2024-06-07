import { useContext } from "react";

//Contexts
import { WeatherContext } from "./contexts/WeatherContext";

//Components
import InitialScreen from "./components/layout/InitialScreen/InitialScreen";
import MainScreen from "./components/layout/MainScreen/MainScreen";

const App = () => {
    const { query } = useContext(WeatherContext);

    if (!query) {
        return <InitialScreen />;
    }

    return <MainScreen />;
};

export default App;
