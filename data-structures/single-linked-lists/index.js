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

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const prev = this.get(index - 1);
    const newNode = new Node(value);
    const temp = prev.next;
    newNode.next = temp;
    prev.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const prev = this.get(index - 1);
    const current = prev.next;
    const temp = current.next;
    current.next = null;
    prev.next = temp;
    this.length--;
    return current;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    console.log(this);
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList();
list.push('How');
list.push('are');
list.push('you?');
list.push("I'm");
list.push('fine');

// console.log(list.set(4, 'great!'));
// console.log(list.insert(5, ':)'));
// console.log(list.remove(3));
console.log(list.reverse());
