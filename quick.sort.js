Array.prototype.quickSort = function () {
    sort(this, 0, this.length - 1);
    return this;

    function sort(array, left, right) {
        if (left < right) {
            let border = partition(array, left, right);
            sort(array, border + 1, right);
            sort(array, left, border - 1);
        }
    }

    function partition(array, left, right) {
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
