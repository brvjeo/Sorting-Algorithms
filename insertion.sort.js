Array.prototype.insertionSort = function (){
    for(let i = 1; i < this.length; i++){
        let item = this[i];
        let j = i;

        while (item < this[j - 1] && j){
            this[j] = this[j-1];
            j--;
        }

        this[j] = item;
    }

    return this;
}