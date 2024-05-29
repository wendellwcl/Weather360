import React from "react";
import ReactDOM from "react-dom/client";

//Contexts
import WeatherContextProvider from "./contexts/WeatherContext";

//Styles
import "./styles/index.scss";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <WeatherContextProvider>
            <App />
        </WeatherContextProvider>
    </React.StrictMode>
);
