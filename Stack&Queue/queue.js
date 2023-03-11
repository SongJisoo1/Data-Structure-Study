/*
    firstIn firstOut

*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
           this.tail.next = newNode;
           this.tail = newNode;
        }

        this.size++;
        return true;
    }   

    dequeue() {
        if(!this.head) {
            return 'queue is empty...';
        }

        const tempNode = this.head;

        if(this.head === this.tail) {
            this.tail = null;
        }

        this.head = this.head.next;
        
        this.size--;
        return tempNode.data;
    }

    display() {
        if(!this.head) {
            console.log('queue is empty...');
            return null;
        }

        let currNode = this.head;

        process.stdout.write("Front ");

        while(currNode !== this.tail) {
            process.stdout.write(`${currNode.data} ---> `);
            currNode = currNode.next;
        }

        process.stdout.write(`${this.tail.data} (REAR)\n`);
    }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.display();
q.enqueue(4);
q.enqueue(5);
q.display();
q.dequeue();
q.display();
q.dequeue();
q.display();
q.dequeue();
q.dequeue();
q.display();
q.dequeue();
q.display();
