/*
 * A helper function that handles and organizes forecast data.
 *
 * @param {forecastData} Forecast data from api.
 * @returns {weatherForecast} Organized and formatted forecast data.
 */

//Utils
import { getMostFrequent } from "./getMostFrequent";
import { getTomorrowDate } from "./getTomorrowDate";
import { handleWeatherIcon } from "./handleWeatherIcon";

//Types
import { WeatherIconCodes } from "../types/WeatherIconCodes.type";

export function handleForecastData(forecastData: any[]) {
    const tomorrowDate = getTomorrowDate();
    const firstIndex = getFirstIndex(tomorrowDate);
    const weatherForecast = [];

    function getFirstIndex(value: string) {
        const index = forecastData.findIndex((item: { dt_txt: string }) => {
            return item.dt_txt.includes(value);
        });

        return index;
    }

    function handleIconsCode(weatherIcon: string[]) {
        const formattedCodes = weatherIcon.map((el) => el.replace(/n|d/, ""));
        const mostFrequent = getMostFrequent(formattedCodes);
        const iconCode = `${mostFrequent}d`;

        return iconCode as WeatherIconCodes;
    }

    for (let i = 0; i < 4; i++) {
        const tempMin = [];
        const tempMax = [];
        const weather = [];
        const weatherIcon = [];

        for (let j = 0; j < 8; j++) {
            const currentIndex = firstIndex + j + i * 8;
            const currentItem = forecastData[currentIndex];

            tempMin.push(currentItem.main.temp_min);
            tempMax.push(currentItem.main.temp_max);
            weather.push(currentItem.weather[0].description);
            weatherIcon.push(currentItem.weather[0].icon);
        }

        const formattedData = {
            tempMin: Math.min(...tempMin),
            tempMax: Math.max(...tempMax),
            weather: getMostFrequent(weather),
            weatherIcon: handleWeatherIcon(handleIconsCode(weatherIcon)),
        };

        weatherForecast.push(formattedData);
    }

    return weatherForecast;
}
