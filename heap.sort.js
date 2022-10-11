const BinaryHeap = require('./assets/BinaryHeap');

Array.prototype.heapSort = function (){
    const heap = new BinaryHeap(BinaryHeap.minheap);
    this.forEach(value => heap.add(value));

    return [...heap];
}