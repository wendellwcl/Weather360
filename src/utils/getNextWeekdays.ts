/*
 * A helper function that returns the sequence of the weekdays from today.
 *
 * @param {} .
 * @returns {sequenceOfTheWeekdays} A string array of the sequence of the weekdays from today.
 */

export function getNextWeekdays() {
    const weekdays = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
    const today = new Date();
    const sequenceOfTheWeekdays = [];

    for (let i = 1; i <= 7; i++) {
        let weekdayIndex = today.getDay() + i;

        if (weekdayIndex > 6) {
            weekdayIndex = weekdayIndex - 7;
        }

        sequenceOfTheWeekdays.push(weekdays[weekdayIndex]);
    }

    return sequenceOfTheWeekdays;
}
