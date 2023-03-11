/*
    스택이란 후입선출을 따르는 데이터 구조이다 
    가장 마지막에 추가된 요소는 가만 먼저 제거된다 .

    어디에 사용 ? 뒤로가기 ? 방문기록 ?

    insert O(1)
    remove O(1)
    Searching O(n)
    access O(n)
*/

// 내장 배열을 사용한 구현

class Stack {
    stack = [];
    pointer = -1;
    size = 0;

    constructor(size) {
        this.stack.length = size;
        this.size = size;
    }

   isEmpty() {
    return (this.pointer === -1);
   }

   isFull() {
    return(this.pointer === this.stack.length - 1);
   }

   push(data) {
    if(this.isFull()) {
        return 'stack is full!!';
    } else {
        this.stack[++this.pointer] = data;
        return true;
    } 
   }

   pop() {
    if(this.isEmpty()) {
        return false;
    } else {
        const element = this.stack[this.pointer];
        this.stack[this.pointer--] = null;
        return element;
    }
   }

   peek() {
    if(this.isEmpty()) {
        return false;
    } else {
        return this.stack[this.pointer];
    }
   }

   clear() {
    if(this.isEmpty()) {
        return false;
    } else {
        this.pointer = -1;
        this.stack.splice(0);
        this.stack.length = this.size;
    }
   }

    printStack() {
        if(this.isEmpty()) {
            return false;
        }

        while(this.stack[this.pointer] >= 0) {
            console.log('pointer --> ' + this.pointer);
            console.log(this.stack[this.pointer--]);
        }
    }
}

// const stack = new Stack(3);
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack);
// stack.printStack();

class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class Stack_LinkedList {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);

        if(!this.top) {
            this.top = newNode;
        } else {
            const oldTop = this.top;
            newNode.next = oldTop;
            this.top = newNode;
        }

        this.size++;
        return true;
    }

    pop() {
        
        if(!this.top) {
            return 'stack is empty...';
        } else {
           const removedNode = this.top;
           this.top = this.top.next;
           this.size--;

           if(this.size === 0) {
            this.top = null;
           }

           return removedNode;
           
            // let currNode = this.head;
            // let prevNode = currNode;

            // while(currNode.next) {
            //     prevNode = currNode;
            //     currNode = currNode.next;    
            // }

            // const removedNode = currNode;
            // this.top = prevNode;
            // prevNode.next = null;
            // this.size--;

            // if(this.size === 0) {
            //     this.head = null;
            //     this.top = null;
            // }

            // return removedNode;
        }
    }
}

const stack = new Stack_LinkedList();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();