class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export { Queue };

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
    this.isEmpty = true;
  }

  peek() {
    this.first.value;
  }

  enqueue(value) {
    // for queues, which would be the best linked-list format?
    // (first) a -> b -> c // enqueue - o(1) // dequeue - O(1)
    // (first) a <- b <- c // enqueue - o(1) // dequeue - O(n)
    // soo, I're using the first pattern
    const newNode = new Node(value);
    //
    if (this.length) {
      // a -> b -> c
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = this.last = newNode;
      this.isEmpty = false;
    }
    this.length++;
    return this;
  }

  dequeue() {
    // a -> b -> c
    // a
    // -
    if (this.length === 0) return new Error('already empty!');
    //
    let firstNode = this.first;
    //
    this.first = this.first.next;
    this.length--;
    return firstNode;
  }
}

const myQueue = new Queue();
myQueue.enqueue('rahul');
myQueue.enqueue('another person');
myQueue.enqueue('last person');

myQueue.dequeue();
myQueue.dequeue();

console.log(`💎 myQueue: `, myQueue);
