import { openWeatherKey } from "../config";

async function fetchData(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();

        switch (response.status) {
            case 200:
                return data;
            case 404:
                throw new Error("Cidade não encontrada");
            default:
                throw new Error("Ops, algo de errado aconteceu");
        }
    } catch (err) {
        throw new Error(err as string);
    }
}

export const fetchWeather = async () => {
    const data = await fetchData(
        `https://api.openweathermap.org/data/2.5/weather?q=sao%20paulo&appid=${openWeatherKey}&lang=pt_br`
    );

    return data;
};

export const fetchForecast = async () => {
    const data = await fetchData(
        `https://api.openweathermap.org/data/2.5/forecast?q=sao%20paulo&appid=${openWeatherKey}&lang=pt_br`
    );

    return data;
};
