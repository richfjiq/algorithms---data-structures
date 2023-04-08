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
}

const list = new SinglyLinkedList();
list.push('How');
list.push('are');
list.push('you?');
list.pop();
list.pop();
list.pop();
console.log({ list });
