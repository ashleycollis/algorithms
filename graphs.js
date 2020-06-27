class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) return (this.adjacencyList[name] = []);
  }
  addEdge(vertexOne, vertexTwo) {
    if (this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo]) {
      this.adjacencyList[vertexOne].push(vertexTwo);
      this.adjacencyList[vertexTwo].push(vertexOne);
    }
  }
  removeEdge(vertexOne, vertexTwo) {
    if (this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo]) {
      this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
        (vertex) => {
          return vertex !== vertexTwo;
        }
      );
      this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
        (vertex) => {
          return vertex !== vertexOne;
        }
      );
    }
  }
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].map((vertexTwo) => {
        return this.removeEdge(vertex, vertexTwo);
      });
      delete this.adjacencyList[vertex];
    }
  }
  // removeVertex(vertex){
  //   while(this.adjacencyList[vertex].length){
  //     const adjacentVertex = this.adjacencyList[vertex].pop()
  //     this.removeEdge(vertex, adjacentVertex)
  //   }
  //   delete this.adjacencyList[vertex]
  // }
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('Los Angeles');
g.addVertex('Hong Kong');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Hong Kong', 'Tokyo');
g.addEdge('Hong Kong', 'Dallas');
g.addEdge('Los Angeles', 'Hong Kong');
g.addEdge('Los Angeles', 'Aspen');
g.removeEdge('Hong Kong');
g.removeVertex('Hong Kong');
console.log(g);
