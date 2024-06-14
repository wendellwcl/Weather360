//Utils
import { convertKelvinToCelsius } from "./convertKelvinToCelsius";
import { convertKelvinToFarenheit } from "./convertKelvinToFarenheit";

//Types
import { Metrics } from "../types/Metrics.type";

/**
 * A helper function that converts values ​​from the Kelvin scale to the scale selected by the user.
 *
 * @param {value} Value in Kelvin.
 * @returns {number} Value in the scale selected by the user.
 */

export function convertToCurrentMetric(value: number, metric: Metrics): number | null {
    switch (metric) {
        case "°C":
            return convertKelvinToCelsius(value);
        case "°F":
            return convertKelvinToFarenheit(value);
        default:
            return null;
    }
}
