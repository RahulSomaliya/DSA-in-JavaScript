// Searching techniques for trees/graphs are basically traversing through it

// We're mainly going to look at it with two methods - Breadth first search, and depth first search

//         9
//    8        0
// 45   89  5    3
BFS: [9, 8, 0, 45, 89, 5, 3];
DFS: [9, 8, 45, 89, 0, 5, 3];

// Both of this traversal methods have O(n) time compexity

// *** BFS
// Pros: gives shortest path
// Cons: More memory

// *** DFS
// Pros: Less memory requirement, Does path exists
// Cons: Can get slow

// // Some Questions before learning more about BFS & DFS;

//If you know a solution is not far from the root of the tree: BFS

//If the tree is very deep and solutions are rare: DFS --> incorrect - we'd use BFS as DFS will take too long

//If the tree is very wide: BFS --> incorrect - we'd use DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree: DFS

//Determining whether a path exists between two nodes: DFS

//Finding the shortest path: BFS
