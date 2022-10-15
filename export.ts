import {selectionSort} from "./selection";
import {quickSort} from "./quick";
import {bubbleSort} from "./bubble";
import {shakerSort} from "./shaker";
import {insertionSort} from "./insertion";

type SortingObject = Record<string, Function>;

export const Sortings: SortingObject = {selectionSort, quickSort, bubbleSort, shakerSort, insertionSort};