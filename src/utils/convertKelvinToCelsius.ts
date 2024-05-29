/*
 * A helper function that converts values ​​on the Kelvin scale to the Celsius scale.
 *
 * @param {value} Value in Kelvin.
 * @returns {number} Value in Celsius.
 */

export function convertKelvinToCelsius(value: number): number {
    const celsius = value - 273.15;
    return Math.round(celsius);
}
