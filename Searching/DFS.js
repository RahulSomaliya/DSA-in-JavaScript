class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  #greaterThan(num1, num2) {
    return num1 > num2;
  }

  insert(...values) {
    values.forEach(value => {
      if (!this.root) {
        this.root = new Node(value);
        return this;
      }
      let currentNode = this.root;
      while (currentNode) {
        // currentNode = this.#greaterThan(value, currentNode.value)
        //   ? currentNode.right
        //   : currentNode.left;
        if (this.#greaterThan(value, currentNode.value)) {
          if (!currentNode.right) {
            currentNode.right = new Node(value);
            return this;
          }
          currentNode = currentNode.right;
        } else {
          if (!currentNode.left) {
            currentNode.left = new Node(value);
            return this;
          }
          currentNode = currentNode.left;
        }
      }
    });
  }

  lookup(value) {
    let currentNode = this.root;
    while (currentNode && currentNode.value !== value) {
      currentNode = this.#greaterThan(value, currentNode.value)
        ? currentNode.right
        : currentNode.left;
    }
    if (currentNode && currentNode.value === value) {
      console.log(currentNode);
      return currentNode;
    }
    console.log(`- value ${value} not found in this tree!`);
    return null;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match
        //
        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
              //
              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
          //
          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
              //
              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
          //
          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          //
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;
          //
          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  print() {
    console.log(this.#recurrsivePrinting());
  }

  #recurrsivePrinting(node = this.root, lvl = 0) {
    if (!node?.value) return '~';
    const pattern = `${'|   '.repeat(lvl)}| - `;
    return `${!lvl ? '    ' : ''}${node.value}
    ${pattern}${this.#recurrsivePrinting(node.left, lvl + 1)}
    ${pattern}${this.#recurrsivePrinting(node.right, lvl + 1)}`;
  }

  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }

  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }

  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  // console.log(node.value);
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

function traversePreOrder(node, list) {
  // console.log(node.value);
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

function traversePostOrder(node, list) {
  // console.log(node.value);
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const myTree = new BinarySearchTree();

myTree.insert(9, 4, 6, 20, 170, 15, 1);
// myTree.print();
const DFSInOrderList = myTree.DFSInOrder();
console.log(`💎 DFSInOrderList: `, DFSInOrderList);

const DFSPreOrderList = myTree.DFSPreOrder();
console.log(`💎 DFSPreOrderList: `, DFSPreOrderList);

const DFSPostOrderList = myTree.DFSPostOrder();
console.log(`💎 DFSPostOrderList: `, DFSPostOrderList);

// learning recursion
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
// 🥳 I've already implemented DFS in this traverse recurssion!
// It is a PreOrder implementation

// const res = traverse(myTree.root);
// console.log(`💎 traverse response: `, res);
// traverse shall return -> [5, 1, 3, 10, 8, 11]

//    5
//   1,10
// -,3,8,11
