export const shakerSort = (array: number[]): number[] => {
    if (!array.length) return array;

    let left = 0, right = array.length - 1;
    let i: number;

    while (left <= right) {
        for (i = right; i > left; --i) {
            if (array[i - 1] > array[i]) {
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
            }
        }
        left++;
        for (i = left; i < right; ++i) {
            if (array[i] > array[i + 1]) {
                [array[i + 1], array[i]] = [array[i], array[i + 1]];
            }
        }
        right--;
    }

    return array;
}