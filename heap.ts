import {BinaryHeap} from "./assets/BinaryHeap";

export const heapSort = (array: number[]): number[] => {
    let heap = new BinaryHeap();
    array.forEach(value => heap.add(value));

    return [...heap];
}