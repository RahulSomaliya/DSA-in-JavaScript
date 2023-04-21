// This is the same code as singly Linked list implementation, which is later converted to doubly linked list

// let myLinkedList = {
//   head: {
//     value: 10,
//     prev: null,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//       prev: {
//         value: 10,
//         prev: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    // value would only have the very first node value of the linked list
    this.head = new Node(value);
    this.prev = null;
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // 1 <--> 2 <--> 3 // insert 4 at the end
    const newNode = new Node(value);
    this.tail.next = newNode;
    // 1 <--> 2 <--> 3 --> 4
    newNode.prev = this.tail;
    // 1 <--> 2 <--> 3 <--> 4
    this.tail = newNode;
    this.length++;
    return this;
  } // Time Complexity: O(1)

  prepend(value) {
    // 1 <--> 2 <--> 3 // prepend 'a'
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  } // Time Complexity: O(1)

  insert(index, value) {
    if (index >= this.length) return this.prepend(value);

    if (index === 0) {
      this.prepend(value);
      return this;
    }

    const currentNode = this.traverseToIndex(index - 1);
    // 2 <--> 3 // add 'a' in between
    const newNode = new Node(value);
    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next = newNode;
    newNode.next.prev = newNode;
    this.length++;
    return this;
  } // O(n)

  remove(index) {
    if (index >= this.length) return new Error('out of range error!');

    // 3 <--> 5 <--> 7 // remove 5
    const currentNode = this.traverseToIndex(index - 1);
    currentNode.next = currentNode.next.next;
    currentNode.next.prev = currentNode;
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
  } // O(n/2) ~O(n) // but faster than singly linked list
  // the logic of traversing from front or back as per the index is not implemented yet

  log() {
    const values = [];
    let currNode = this.head;
    while (currNode.next) {
      values.push(currNode.value);
      currNode = currNode.next;
    }
    values.push(currNode.value);
    console.log(values.join(` <--> `));
    console.log(`💎 this.length: `, this.length);
    // console.log(`💎 this.head: `, this.head);
    // console.log(`💎 this.head.next: `, this.head.next);
    // console.log(`💎 this.head.next.prev: `, this.head.next.prev);
  } // O(n)
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
myLinkedList.insert(3, 55);
myLinkedList.remove(4);

myLinkedList.log();
