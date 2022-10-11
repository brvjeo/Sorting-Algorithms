Array.prototype.shakerSort = function () {
    if (!this.length) return this;

    let left = 0, i;
    let right = this.length - 1;

    while (left <= right) {
        for (i = right; i > left; --i) {
            if (this[i - 1] > this[i]) {
                [this[i - 1], this[i]] = [this[i], this[i - 1]];
            }
        }
        left++;
        for (i = left; i < right; ++i) {
            if (this[i] > this[i + 1]) {
                [this[i + 1], this[i]] = [this[i], this[i + 1]];
            }
        }
        right--;
    }

    return this;
};