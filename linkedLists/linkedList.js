class Node {
	constructor(value) {
  	this.value = value;
    this.next = null;
  }
}

class LinkedList {
	constructor() {
  	this.head = null;
  }
  
  addElementAtHead(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  
  addElementAtTail(value) {
  	let node = this.head;
    while(node.next) {
    	node = node.next;
    }
    node.next = new Node(value);
  }
  
  getAll() {
  	let node = this.head;
    const result = [];
    while(node !== null) {
    	result.push(node.value);
      node = node.next;
    }
    result.push("null");
    console.log(result.join(' -> '));
  }
  
  getElementAtIndex(index) {
  	let node = this.head;
    let i = 0;
    while (i < index) {
      	if (node.next !== null) {
        	node = node.next;
        } else {
        	return -1;
        }
      i++;
    }
    return node.value;
  }
  
  length() {
  	let length = 0;
    let  node = this.head;
  	while (node !== null) {
    	node = node.next;
      length++
    }
    return length;
  }
  
  deleteElementAtIndex(index) {
  	let i = 0;
    let node = this.head;
    if (index === 0) {
    	this.head = node.next;
    } else {
    	while(i < index -1) {
      	node = node.next;
        i++;
      }
      node.next = node && node.next ? node.next.next : null;
    }
  }
  
  addElementAtIndex(value, index) {
  	const length = this.length()
    if (index > length) {
    	return -1;
    }
  	if (index === 0) {
    	this.addElementAtHead(value);
    } else if (index === length) {
    	this.addElementAtTail(value);
    } else {
    	let i = 0;
      let node = this.head;
      while(i<index-1) {
      	node = node.next;
        i++;
      }
      const newNode = new Node(value);
      newNode.next = node.next;
      node.next = newNode;
    }
  }
}

const ll = new LinkedList();
ll.addElementAtHead(5);
ll.getAll();

ll.addElementAtHead(3);
ll.getAll();

ll.addElementAtTail(6);
ll.getAll();
// console.log(ll);
console.log(ll.getElementAtIndex(0));
console.log(ll.getElementAtIndex(1));
console.log(ll.getElementAtIndex(2));
console.log(ll.getElementAtIndex(3));
// console.log(ll.length());
// ll.deleteElementAtIndex(2);
// ll.deleteElementAtIndex(0);
ll.getAll();
// ll.deleteElementAtIndex(0);
ll.getAll();
// console.log(ll.length());
ll.addElementAtIndex(17, 0);
ll.getAll();
ll.addElementAtIndex(13, 4);
ll.getAll();
ll.addElementAtIndex(12, 2);
ll.getAll();
// ll.addElementAtIndex(100000,4);
// ll.getAll();