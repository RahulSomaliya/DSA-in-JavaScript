// Those are changes in code from implementStack.js, where linked-lists are replaced with arrays

class Stack {
  constructor() {
    this.top = null;
    this.stackArr = [];
  }

  peek = () => this.stackArr.at(-1);

  push(value) {
    this.stackArr.push(value);
    return this;
  }

  pop() {
    this.stackArr.pop();
    return this;
  }

  print() {
    if (this.isEmpty) {
      console.log(`Empty stack!`);
      return;
    }
    console.log(`--------------------`);
    for (let i = this.stackArr.length - 1; i >= 0; i--) {
      console.log(`-----${this.stackArr[i]}`.padEnd(20, '-'));
    }
    console.log(`--------------------`);
    console.log(`top:${this.stackArr.at(-1)}`);
    console.log(`bottom:${this.stackArr[0]}`);
    console.log(`length:${this.stackArr.length}`);
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
