export const quickSort = (array: number[]): number[] => {
    sort(array, 0, array.length - 1);
    return array;

    function sort(array: number[], left: number, right: number) {
        if (left < right) {
            let border = partition(array, left, right);
            sort(array, border + 1, right);
            sort(array, left, border - 1);
        }
    }

    function partition(array: number[], left: number, right: number): number {
        let item = array[right];
        let less = left;

        for (let i = less; i < right; i++) {
            if (array[i] <= item) {
                [array[i], array[less]] = [array[less], array[i]];
                less++;
            }
        }
        [array[less], array[right]] = [array[right], array[less]];

        return less;
    }
}