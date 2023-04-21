// Linked Lists are of two types - singly and doubly

// arrays are fine for storing data that linked lists store, however it has an occasional O(n) time complexity for dynamic space allocation that has its performance implications, and adding new elements to arrays on any index except the last one had O(n) time complexity which could be improved through linked-lists
const basketArr = ['apples', 'grapes', 'pears'];

// Objects had O(1) time complexity for everything including adding and lookup deleting stuff (except when memory collision is resolved and multiple elements are stored at the same memory space using linked-lists or other resolution method - this could have O(n) time complexity). However, the only improvement space in hash tables were - Objects are by nature unsorted!
const basketObj = {
  apples: true,
  grapes: true,
  pears: true,
};

// And so the Linked Lists come into play - however it too has its trade-offs so - it could not be considered better than arrays or objects, it just solves specific structure that could be better suited than those DSs in some place
// linked list: apples --> grapes --> pears

// apples // -> head
// 8948 --> grapes
//           9729 --> pears // tail
//                     474 --> null

// JS doesn't have its built-in linked list data type
