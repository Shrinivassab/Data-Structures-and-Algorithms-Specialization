class WeightedGraph {
    constructor() {
        this.adjancyList = {};
    }

    addVertex(vertex) {
        if (!this.adjancyList[vertex]) {
            this.adjancyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjancyList[vertex1].push({node: vertex1, weight});
        this.adjancyList[vertex2].push({node: vertex2, weight});
    }
}