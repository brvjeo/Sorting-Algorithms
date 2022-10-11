Array.prototype.selectionSort = function (){
    let min = 0;

    for(let i = 0; i < this.length - 1; i++){
        for(let j = i + 1; j < this.length; j++){
            if(this[j] < this[min]) min = j;
        }
        [this[i], this[min]] = [this[min], this[i]];
    }

    return this;
}
