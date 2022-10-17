import {selectionSort} from "./selection";
import {quickSort} from "./quick";
import {bubbleSort} from "./bubble";
import {shakerSort} from "./shaker";
import {insertionSort} from "./insertion";

interface ISortable {
    [name: string]: (array: number[]) => number[];
}

export const Sortings: ISortable = {selectionSort, quickSort, bubbleSort, shakerSort, insertionSort};
