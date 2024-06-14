import { useContext } from "react";

//Components
import InitialScreen from "./components/layout/InitialScreen/InitialScreen";
import MainScreen from "./components/layout/MainScreen/MainScreen";

//Contexts
import { WeatherContext } from "./contexts/WeatherContext";

const App = () => {
    const { query } = useContext(WeatherContext);

    if (!query) {
        return <InitialScreen />;
    }

    return <MainScreen />;
};

export default App;
