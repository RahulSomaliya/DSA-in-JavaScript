class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  // child() { // returns child node(s)
  //   return this.right && this.left ? { right: this.right, left: this.left} : this.left || this.right
  // }

  isLeafNode() {
    return !this.left && !this.right;
  }

  hasSingleBranch() {
    return (!this.right && this.left) || (this.right && !this.left);
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  #greaterThan(num1, num2) {
    return num1 > num2; // returns true if num1 is greater than num2
  }

  insert(...values) {
    values.forEach(value => {
      if (!this.root) {
        this.root = new Node(value);
        return this;
      }
      //              A       =-> level 0
      //             / \
      //            B   C     =-> level 1
      //           / \ / \
      //          E  F G (H)   =-> level 2
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

  // remove(value) {
  // FIXME: I've just made a big mess out of this function, let me look up to the solution and re-write this function downwards
  // // support I want to delete 10 here
  // //               5       =-> level 0
  // //             /  \
  // //            1    10     =-> level 1
  // //           / \  / \
  // //          0  3 8  11   =-> level 2
  //
  // let currentNode = this.root;
  // while (currentNode && currentNode.value !== value) {
  //   currentNode = this.#greaterThan(value, currentNode.value)
  //     ? currentNode.right
  //     : currentNode.left;
  // }
  // if (currentNode && currentNode.value === value) {
  //   console.log(currentNode);
  //   return currentNode;
  // }
  // console.log(`- value ${value} not found in this tree!`);
  // return null;
  //
  // // here, there will be three case;
  //
  // // -> is leaf node --- remove directly
  // if (currentNode.isLeafNode()) {
  //
  // }
  //
  // // -> one child --- replace with child node
  // if (currentNode.hasSingleBranch()){}
  //
  // // -> two child --- replace with successor leaf
  // // the final case
  // }

  remove(value) {
    // This is totally an overhead shot, try to understand this
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

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

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
    // suppose I've this tree, how would I print it?
    //               5       =-> level 0
    //             /  \
    //           -1    10     =-> level 1
    //           / \  / \
    //          0  3 8  11   =-> level 2
    console.log(this.#recurrsivePrinting());
  }

  #recurrsivePrinting(node = this.root, lvl = 0) {
    if (!node?.value) return '~';
    //
    const pattern = `${'|   '.repeat(lvl)}| - `;
    //
    return `${!lvl ? '    ' : ''}${node.value}
    ${pattern}${this.#recurrsivePrinting(node.left, lvl + 1)}
    ${pattern}${this.#recurrsivePrinting(node.right, lvl + 1)}`;
  }
}

const myTree = new BinarySearchTree();

myTree.insert(5);
myTree.insert(10);
myTree.insert(1, 0, 3, 8, 11);

// console.log(`💎 myTree: `, myTree);
myTree.print();
myTree.lookup(29);

// learning recursion
function traverse(node) {
  const tree = { value: node.value };
  // console.log(`💎 node: `, node);
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const res = traverse(myTree.root);
console.log(`💎 traverse response: `, res);
// traverse shall return -> [5, 1, 3, 10, 8, 11]
