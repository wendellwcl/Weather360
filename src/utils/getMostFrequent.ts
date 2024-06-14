/**
 * A helper function that returns the most repeated item in an array.
 *
 * @param {arr} An array of any type.
 * @returns {mostFrequentItem} The most repeated item/value in the array.
 */

export function getMostFrequent(arr: any[]) {
    const frequency: { [key: string]: number } = {};
    let maxFreq = 0;
    let mostFrequentItem;

    for (const item of arr) {
        const itemKey = item as string;
        if (frequency[itemKey]) {
            frequency[itemKey]++;
        } else {
            frequency[itemKey] = 1;
        }

        if (frequency[itemKey] > maxFreq) {
            maxFreq = frequency[itemKey];
            mostFrequentItem = item;
        }
    }

    return mostFrequentItem;
}
