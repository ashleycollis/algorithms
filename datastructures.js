// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while (current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if (this.length == 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
//   shift() {
//     if (!this.head) return undefined;
//     let oldHead = this.head;
//     this.head = oldHead.next;
//     this.length--;
//     if (this.length == 0) {
//       this.tail = null;
//     }
//     return oldHead;
//   }
//   unshift(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let counter = 0;
//     let current = this.head;
//     while (counter !== index) {
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }
//   set(index, val) {
//     let foundNode = this.get(index);
//     if (foundNode) {
//       foundNode.val = val;
//       return true;
//     }
//     return false;
//   }
//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === this.length) return !!this.push(val); //!! ensures it turns a true or false value;
//     if (index === 0) return !!this.unshift(val);
//     let newNode = new Node(val);
//     let prev = this.get(index - 1);
//     let temp = prev.next;
//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined; //check index validity
//     if (index === this.length - 1) return this.pop();
//     if (index === 0) return this.shift();
//     let previousNode = this.get(index - 1);
//     let removed = previousNode.next; // what is being returned
//     previousNode.next = removed.next;
//     this.length--;
//     return removed;
//   }
//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let prev = null; //need to make sure the end of the list, tail is null
//     let next;

//     for (let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this;
//   }
// }
// /* Reversing a list - reverse and traverse
//  */
// // let list = new SinglyLinkedList();
// // list.push('hello');
// // list.push('GOODBYE');
// // list.push('!');
// // list.push('rock');
// // list.push('the');
// // list.push('boat');
// // console.log(list);

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (this.length === 0) return undefined;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       let temp = this.tail;
//       this.tail = temp.prev;
//       this.tail.next = null;
//       temp.prev = null;
//       this.length--;
//       return temp;
//     }
//   }
//   //4 5 3 2
//   shift() {
//     if (this.length === 0) return undefined;
//     let oldHead = this.head;

//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     }
//     this.head = oldHead.next;
//     this.head.prev = null;
//     oldHead.next = null;
//     this.length--;
//     return oldHead;
//   }
//   unshift(val) {
//     var newNode = new Node(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.head.prev = newNode;
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     var count, current;
//     if (index <= this.length / 2) {
//       count = 0;
//       current = this.head;
//       while (count !== index) {
//         current = current.next;
//         count++;
//       }
//     } else {
//       count = this.length - 1;
//       current = this.tail;
//       while (count !== index) {
//         current = current.prev;
//         count--;
//       }
//     }
//     return current;
//   }
//   set(index, val) {
//     let foundNode = this.get(index);
//     if (foundNode != null) {
//       foundNode.val = val;
//       return true;
//     }
//     return false;
//   }
//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === 0) return !!this.unshift();
//     if (index === this.length) return !!this.push();
//     let newNode = new Node(val);
//     let beforeNode = this.get(index - 1);
//     let afterNode = beforeNode.next;
//     beforeNode.next = newNode;
//     newNode.prev = beforeNode;

//     newNode.next = afterNode;
//     afterNode.prev = newNode;

//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index >= length) return undefined;
//     if (index === 0) return !!this.shift();
//     if (index === this.length - 1) return !!this.pop();
//     let removed = this.get(index);
//     let beforeNode = removed.previous;
//     let afterNode = removed.next;
//     beforeNode.next = afterNode;
//     afterNode.previous = beforeNode;
//     removed.next = null;
//     removed.prev = null;
//     this.length--;
//     return removed;
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   enqueue(val) {
//     //adds to end
//     let newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     return ++this.size;
//   }
//   dequeue() {
//     //removes from start
//     if (!this.first) return null;
//     let temp = this.first;
//     if (this.first === this.last) {
//       return (this.last = null);
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    newNode = Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newnode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (!found && current) {
      //makes sure it doesn't loop unnecessarily when found
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

class BinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx; //keeps track of what index to swap it to
        }
        if (rightChildIdx > length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
      }
      if (swap === null) break; //if there's no left or right child, swap will stay null and it breaks out
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
let heap = new BinaryHeap();
