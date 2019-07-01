class MaxBimaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12, 55];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0) {
            let parentIndex = Math.floor(((index - 1) / 2));
            let parent = this.values[parentIndex];

            if (element <= parent) {
                break;
            }
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
}

let heap = new MaxBimaryHeap();
heap.insert(55);
