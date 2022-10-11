Array.prototype.bubbleSort = function (){
    for(let i = 0; i < this.length; i++){
        for(let j = 1; j < this.length; j++){
            if(this[j - 1] > this[j]){
                [this[j - 1], this[j]] = [this[j], this[j - 1]];
            }
        }
    }

    return this;
};