const BinaryHeap = require('./assets/BinaryHeap');

const heapSort = array => {
    const heap = new BinaryHeap(BinaryHeap.minheap);
    array.forEach(value => heap.add(value));

    return [...heap];
}

module.exports = heapSort;