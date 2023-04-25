class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
    this.isEmpty = true;
  }

  peek() {
    // let's us see what's at the top of the stack
    return this.top.value;
  }

  push(value) {
    // how should I use linked list for stack?
    // A -> B -> C // this fails for popping, it would take O(n)
    // A <- B <- C // Perfect for both push and pop with O(1)

    const newNode = new Node(value);

    if (this.length) {
      newNode.next = this.top;
      this.top = newNode;
    } else {
      this.top = this.bottom = newNode;
      this.isEmpty = false;
    }
    this.length++;
    return this;
  }

  pop() {
    // let's us remove the top element from the stack
    if (this.length === 0) return new Error('already empty!');

    if (this.length === 1) {
      this.bottom = this.top = null;
      this.isEmpty = true;
    } else {
      // A <- B <- C
      this.top = this.top.next;
    }
    this.length--;
    return this;
  }

  print() {
    if (this.isEmpty) {
      console.log(`Empty stack!`);
      return;
    }
    console.log(`--------------------`);
    let currentNode = this.top;
    while (currentNode) {
      console.log(`-----${currentNode.value}`.padEnd(20, '-'));
      currentNode = currentNode.next;
    }
    console.log(`--------------------`);
    console.log(`top:${this.top?.value}`);
    console.log(`bottom:${this.bottom?.value}`);
    console.log(`length:${this.length}`);
  }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push('Discord');
myStack.push('One More');
myStack.push('The last!');

myStack.pop();

myStack.print();

// Discord
// Udemy
// Google
