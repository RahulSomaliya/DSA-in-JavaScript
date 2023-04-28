// Each node can only have zero / one / two children

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// fundamentally very similar to linked-list
//              A       =-> level 0
//             / \
//            B   C     =-> level 1
//           / \ / \
//          E  F G  H   =-> level 2
// number of nodes of entire tree = 7

// number of nodes on each level of binary tree like the one above
// Level 0: 2^0 = 1
// Level 1: 2^1 = 2
// Level 2: 2^2 = 4
// Level 3: 2^3 = 8

// So... # of nodes in a perfect binary tree with 'h' height = 2 ^ h - 1
// log nodes = height
// (log 100 = 2)
// 10^2 = 100
