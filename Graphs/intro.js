// Graphs can be represented by multiple ways

// Let's say we want to represent this graph,
//      2 --- 0
//    /   \
//   1 --  3

// Now, this is a undirected cyclic graph, and we can represent them by,

// - Edge List
const graph = [
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 3],
]; // Here, we simply stated all the connections

// - Adjacent List - for this, I could use objects, arrays or whatever
const graph1 = {
  0: [2],
  1: [2, 3],
  2: [1, 3, 0],
  3: [1, 3],
};

// Adjacent Matrix, here index of given object is representing the node values that we have i.e. 0 1 2 and 3, and the values inside those arrays gives weather they're connected to the corresponding element or not (zeros and ones). Those 0s and 1s can also be weighted numbers if the graph is a weighted one
const graph2 = [
  [0, 0, 1, 0], // It means 0 is connected to 2
  [0, 0, 1, 1], // 1 is connected to 2 and 3
  [1, 1, 0, 1], // 2 is connected to 0, 1 and 3
  [0, 1, 1, 0], // 3 is connected to 1 and 2
];

// this could be represented by objects too
const graph3 = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
