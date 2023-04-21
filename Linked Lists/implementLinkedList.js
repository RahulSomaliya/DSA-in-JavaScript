// we're creating a simple linked list that has data;
// 10 --> 5 --> 16

// soo... this is what we want to create
// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };
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

    if (index === 0) {
      this.prepend(value);
      return this;
    }

    const currentNode = this.traverseToIndex(index - 1);
    const newNode = new Node(value);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return this;
  } // O(n)

  remove(index) {
    if (index >= this.length) return new Error('out of range error!');

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
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
myLinkedList.insert(3, 55);
myLinkedList.remove(4);

myLinkedList.log();

// This is a singly linked list
// Doubly link list is same as singly linked list with an additional feature. It has an extra node field that points to the backward node. This would allow us to traverse both the way from a given node. It is more efficient than Singly linked list as we could be looking up with O(n/2) which is technically O(n) but it would be faster than singly link list but with a higher space complexity.
