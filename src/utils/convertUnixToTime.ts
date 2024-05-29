/*
 * A helper function that converts values ​​on Unix Timestamp to conventional time.
 *
 * @param {value} Value in Unix Timestamp.
 * @returns {formattedTime} Value in conventional time.
 */

export function convertUnixToTime(value: number): string {
    function formatValue(value: number | string): string {
        return String(value).padStart(2, "0");
    }

    const date = new Date(value * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = formatValue(hours);
    const formattedMinutes = formatValue(minutes);
    const formattedTime = `${formattedHours}:${formattedMinutes}`;

    return formattedTime;
}
