/**
 * A helper function that converts values ​​on the Kelvin scale to the Farenheit scale.
 *
 * @param {value} Value in Kelvin.
 * @returns {number} Value in Farenheit.
 */

export function convertKelvinToFarenheit(value: number): number {
    const farenheit = 1.8 * (value - 273) + 32;
    return Math.round(farenheit);
}
