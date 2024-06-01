/*
 * A helper function that returns the respective weather icon.
 *
 * @param {code} Weather icon code.
 * @returns {weatherIcon} Respective weather icon.
 */

//Icons
import {
    WiCloudy,
    WiDayCloudy,
    WiDayCloudyHigh,
    WiDaySunny,
    WiFog,
    WiNightAltCloudyHigh,
    WiNightCloudy,
    WiRain,
    WiShowers,
    WiSnowflakeCold,
    WiStars,
    WiThunderstorm,
} from "react-icons/wi";

//Types
import { WeatherIconCodes } from "../types/WeatherIconCodes.type.ts";

export function handleWeatherIcon(code: WeatherIconCodes): React.ReactElement {
    switch (code) {
        case "01d":
            return <WiDaySunny />;
        case "01n":
            return <WiStars />;
        case "02d":
            return <WiDayCloudy />;
        case "02n":
            return <WiNightCloudy />;
        case "03d":
            return <WiDayCloudyHigh />;
        case "03n":
            return <WiNightAltCloudyHigh />;
        case "04d":
        case "04n":
            return <WiCloudy />;
        case "09d":
        case "09n":
            return <WiShowers />;
        case "10d":
        case "10n":
            return <WiRain />;
        case "11d":
        case "11n":
            return <WiThunderstorm />;
        case "13d":
        case "13n":
            return <WiSnowflakeCold />;
        case "50d":
        case "50n":
            return <WiFog />;
    }
}
