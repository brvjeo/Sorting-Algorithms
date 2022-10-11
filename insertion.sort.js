const insertionSort = array => {
    for(let i = 1; i < array.length; i++){
        let item = array[i];
        let j = i;

        while (item < array[j - 1] && j){
            array[j] = array[j-1];
            j--;
        }

        array[j] = item;
    }

    return array;
}

module.exports = insertionSort;