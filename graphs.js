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
  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (!vertex) return null; //base case
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true; //can use array but object is more explicit
    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  breadthFirstSearch(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          //if neighbor hasn't been visited need to mark it as visited and push it on to queue
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

// let g = new Graph();
// g.addVertex('Dallas');
// g.addVertex('Tokyo');
// g.addVertex('Aspen');
// g.addVertex('Los Angeles');
// g.addVertex('Hong Kong');
// g.addEdge('Dallas', 'Tokyo');
// g.addEdge('Dallas', 'Aspen');
// g.addEdge('Hong Kong', 'Tokyo');
// g.addEdge('Hong Kong', 'Dallas');
// g.addEdge('Los Angeles', 'Hong Kong');
// g.addEdge('Los Angeles', 'Aspen');
// g.removeEdge('Hong Kong');
// g.removeVertex('Hong Kong');
// console.log(g);

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
g.breadthFirstSearch('A');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
