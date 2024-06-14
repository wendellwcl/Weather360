/**
 * A helper function that returns the tomorrow's date.
 *
 * @param {} null.
 * @returns {tomorrowDate} Tomorrow's date in string format.
 */

export function getTomorrowDate(): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const formattedDay = String(tomorrow.getDate()).padStart(2, "0");
    const formattedMonth = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const formattedYear = String(tomorrow.getFullYear());
    const formattedTomorrowDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;

    return formattedTomorrowDate;
}
