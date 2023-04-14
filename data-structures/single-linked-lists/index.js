// ++++++++++ LISTS ++++++++++
// Do not have indexes!
// Connected via nodes with a next pointer
// Random access is not allowed

// ++++++++++ ARRAYS ++++++++++
// Indexed in order!
// Insertion and deletion can be expensive
// Can quickly be accessed at a specific index

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adds a node at beginning
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // Removes a node at the end
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Removes a node at the beginning
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // Adds a new node to the beginning of the Linked list
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== idx) {
      counter++;
      current = current.next;
    }

    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = value;
      return true;
    }

    return false;
    // if (index < 0 || index >= this.length) return false;

    // let counter = 0;
    // let current = this.head;

    // while (counter !== index) {
    //   counter++;
    //   current = current.next;
    // }

    // current.val = value;
    // return true;
  }
}

const list = new SinglyLinkedList();
list.push('How');
list.push('are');
list.push('you?');
list.push("I'm");
list.push('fine');

console.log(list.set(4, 'great!'));
