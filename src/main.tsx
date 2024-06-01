// import React from "react";
import ReactDOM from "react-dom/client";

//Contexts
import LoadingContextProvider from "./contexts/LoadingContext";
import WeatherContextProvider from "./contexts/WeatherContext";

//Styles
import "./styles/index.scss";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <LoadingContextProvider>
        <WeatherContextProvider>
            <App />
        </WeatherContextProvider>
    </LoadingContextProvider>
    // </React.StrictMode>
);
