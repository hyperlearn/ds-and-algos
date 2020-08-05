class Stack {
  constructor() {
    this.state = [];
  }

  push(value) {
    this.state = [...this.state, value];
  }

   pop() {
     if (this.state.length < 0) {
       return "Nothing to pop";
     }
     const result = this.state[this.state.length - 1];
     this.state = this.state.slice(0, this.state.length-1);
     return result;
  }

  last() {
    return this.state[this.state.length-1];
  }
  
  printAll() {
    console.log(this.state.join(" "))
  }
}

const sk = new Stack();
sk.push(1);
sk.printAll();
sk.push(2);
sk.printAll();
sk.push(3);
sk.printAll();
sk.pop();
sk.printAll();
sk.pop();
sk.printAll();
sk.push(45);
sk.printAll();
sk.pop();
sk.pop();
sk.pop();
sk.printAll();
