//Configs
import { openWeatherKey } from "../config";

async function fetchData(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        switch (response.status) {
            case 200:
                return data;
            case 404:
                throw Error("Localização não encontrada. Tente novamente.");
            default:
                throw Error("Ops, algo de errado aconteceu. Tente novamente mais tarde.");
        }
    } catch (err) {
        return {
            error: err,
        };
    }
}

export const fetchWeather = async (query: string) => {
    const encodedQuery = encodeURI(query);

    const data = await fetchData(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodedQuery}&appid=${openWeatherKey}&lang=pt_br`
    );

    return data;
};

export const fetchForecast = async (query: string) => {
    const encodedQuery = encodeURI(query);

    const data = await fetchData(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodedQuery}&appid=${openWeatherKey}&lang=pt_br`
    );

    return data;
};
