export const selectionSort = (array: number[]): number[] => {
    let min = 0;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) min = j;
        }
        [array[i], array[min]] = [array[min], array[i]];
    }

    return array;
}