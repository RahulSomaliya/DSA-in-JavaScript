// We're going to represent the graph via Adjacent List using objects

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addNode(node) {
    // edge cases invalid type not handled for simplicity
    if (Object.keys(this.adjacentList).some(key => key === node)) {
      console.error('element already exists!');
      return new Error('element already exists!');
    }
    this.adjacentList[node] = [];
    this.numberOfNodes++;
    return this;
  } // node could be also called Vertex

  addEdge(node1, node2) {
    if (
      ![node1, node2].every(node =>
        Object.keys(this.adjacentList).includes(node)
      )
    ) {
      console.error('invalid nodes!');
      return new Error('invalid nodes!');
    }

    // undirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
    return this;
  }

  showConnections() {
    console.log(this.adjacentList);
    return this;
  }
}

// We're going to create this undirected unweighted cyclical graph

// 3 --- 4 --- 5
// |     |     |
// 1 --- 2     6
//  \   /
//    0

const myGraph = new Graph();
myGraph.addNode('0');
myGraph.addNode('1');
myGraph.addNode('2');
myGraph.addNode('3');
myGraph.addNode('4');
myGraph.addNode('5');
myGraph.addNode('6');

myGraph.addEdge('0', '1');
myGraph.addEdge('0', '2');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '3');
myGraph.addEdge('3', '4');
myGraph.addEdge('2', '4');
myGraph.addEdge('4', '5');
myGraph.addEdge('5', '6');

// Now, the adjacentList shall be : {
//   0: [1, 2],
//   1: [0, 2, 3],
//   2: [0, 1, 4],
//   3: [1, 4],
//   4: [2, 3, 5],
//   5: [4, 6],
//   6: [5],
// };
// myGraph.showConnections();
console.log(myGraph);
