export class BinaryHeap implements Iterable<number> {
    private array = Array<number>(1);
    private compareFunction: (x: number, y: number) => number;

    constructor(compare = BinaryHeap.maxheap) {
        if (compare == undefined) {
            throw new Error('Undefined compare function!');
        }
        this.compareFunction = compare;
    }

    add(data: number): void {
        this.array.push(data);

        if (this.array.length == 2) return;

        this.restoreHeap(this.array.length - 1, this.array);
    }

    pull(): number | undefined {
        return this.pullFromArray(this.array);
    }

    private pullFromArray(array: Array<number>): number | undefined {
        if (array.length == 1) return;
        if (array.length == 2) return array.pop();

        let root = array[1];
        array[1] = array[array.length - 1];
        array.pop();

        this.seed(1, array);
        return root;
    }

    private restoreHeap(index: number, array: Array<number>): void {
        if (!Math.floor(index) || !Math.floor(index / 2)) return;

        if (this.compareFunction(array[index], array[Math.floor(index / 2)]) >= 0) {
            this.swap(index, Math.floor(index / 2), array);
            this.restoreHeap(Math.floor(index / 2), array);
        }
    }

    static maxheap(x: number, y: number): number {
        return x - y;
    }

    static minheap(x: number, y: number): number {
        return y - x;
    }

    * [Symbol.iterator](): Iterator<number> {
        let copy: Array<number> = this.array.slice(), value: number | undefined;

        while (copy.length > 1) {
            if((value = this.pullFromArray(copy)) != undefined){
                yield value;
            }else{
                break;
            }
        }
    }

    private seed(index: number, array: Array<number>): void {
        if ((index > array.length - 1) || (index * 2 > array.length - 1)) return;

        let child = this.getPriorChildIndex(index, array);
        if (this.compareFunction(array[index], array[child]) < 0) {
            this.swap(index, child, array);
            this.seed(child, array);
        }
    }

    private getPriorChildIndex(index: number, array: Array<number>): number {
        if (array[index * 2 + 1] == undefined) return index * 2;
        if (this.compareFunction(array[index * 2], array[index * 2 + 1]) > 0) {
            return index * 2;
        } else {
            return index * 2 + 1;
        }
    }

    private swap(i: number, j: number, array: Array<number>) {
        [array[i], array[j]] = [array[j], array[i]];
    }

    get capacity(): number {
        return this.array.length;
    }
}