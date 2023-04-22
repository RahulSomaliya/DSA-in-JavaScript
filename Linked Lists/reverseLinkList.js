// template code from singly linedList implementation
// I'm just adding a new method for LinkedList class that would reverse entire Ll

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // value would only have the very first node value of the linked list
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  } // Time Complexity: O(1)

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  } // Time Complexity: O(1)

  insert(index, value) {
    if (index >= this.length) return this.prepend(value);
    //
    if (index === 0) {
      this.prepend(value);
      return this;
    }
    //
    const currentNode = this.traverseToIndex(index - 1);
    const newNode = new Node(value);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return this;
  } // O(n)

  remove(index) {
    if (index >= this.length) return new Error('out of range error!');
    //
    const currentNode = this.traverseToIndex(index - 1);
    currentNode.next = currentNode.next.next;
    this.length--;
    return this;
  } // Time Complexity: O(n)

  traverseToIndex(index) {
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  } // O(n)

  log() {
    const values = [];
    let currNode = this.head;
    while (currNode.next) {
      values.push(currNode.value);
      currNode = currNode.next;
    }
    values.push(currNode.value);
    console.log(values.join(` --> `));
    console.log(`💎 this.length: `, this.length);
  } // O(n)

  // for this solution, I tried to built a new Instance of the LinkedList itself to start from its tail and prepend each node while iterating
  // the solution has a minor bug which can be resolved, however - at the end of the function, I just couldn't update the current instance with the newly created one. So, I could return the newly created reversedLL, however, I cannot mutate the original instance with this approach. So, I'll try another way of doing this.
  // reverse() {
  // // reversing 1 --> 99 --> 10 --> 55 --> 16
  // // { value: __ , next: __ }
  // // const newTail = this.head;
  // const reversedLL = new LinkedList(this.tail.value);
  // // first move then change the pointer of previous move
  // let currentNode = this.head;
  // while (currentNode.next !== null) {
  //   currentNode = currentNode.next;
  //   reversedLL.prepend(currentNode.value);
  // }
  // reversedLL.log();
  // // this = reversedLL
  // // return this
  // return reversedLL;
  // }
  //
  // In this solution too, I just cannot figure out the way, I'll implement the solution from solution video
  // reverse() {
  //   // reversing 1 --> 99 --> 10 --> 55 --> 16
  //   // given:
  //   // Node: { value: __ , next: __ }
  //   // head, tail, only one way traversing possible
  //   //
  //   const newTail = this.head;
  //   //
  //   const currentNode = this.head;
  //   while (currentNode.next !== null) {
  //     // refactor naming
  //     const newNode = currentNode;
  //     currentNode = currentNode.next;
  //   }
  //   // handling the original tail to new head pending
  // }

  reverse() {
    if (this.length === 1) return this;

    // 1 --> 2 --> 3

    let first = this.head; // the first node
    this.tail = this.head;
    let second = first.next; // the second node
    while (second) {
      const temp = second.next; // the third node
      second.next = first;
      first = second;
      second = temp;
    }
    // this.head.next = null;
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
myLinkedList.insert(3, 55);
myLinkedList.remove(4);

console.log('original;');
myLinkedList.log();

console.log('\nreversed;');
myLinkedList.reverse();
myLinkedList.log();

// This is a singly linked list
// Doubly link list is same as singly linked list with an additional feature. It has an extra node field that points to the backward node. This would allow us to traverse both the way from a given node. It is more efficient than Singly linked list as we could be looking up with O(n/2) which is technically O(n) but it would be faster than singly link list but with a higher space complexity.
