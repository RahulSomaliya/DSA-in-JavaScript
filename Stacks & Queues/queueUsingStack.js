// Interview que: implement queues using stacks
// hint: it would be easier when the stacks are implemented with arrays, however, I'll do them both (linked-lists as well as arrays)

// FIXME: It looks like I won't be able to import the Queue class without the module structure.

// import Queue from '../Stacks & Queues/implementQueue';
// import * as queue from './implementQueue.js';

// const dummyQueue = new Queue();
// console.log(`💎 dummyQueue: `, dummyQueue);
// console.log(`💎 queue: `, queue);

// ----------- implementation--------------

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  // A -> B -> C -> D
  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first.at(-1);
  }
}

const myQueue = new CrazyQueue();
console.log(`💎 myQueue.peek(): `, myQueue.peek());

myQueue.enqueue('Whatever');
myQueue.enqueue('New Member');
myQueue.enqueue('Last Member');

console.log(`💎 myQueue.peek(): `, myQueue.peek());

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();

console.log(`💎 myQueue.peek(): `, myQueue.peek());
