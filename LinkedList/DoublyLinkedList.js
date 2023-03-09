class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        const newNode = new Node(data);

        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) {
            return null;
        }

        const removedNode = this.tail;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }

        this.length--;
        return removedNode;
    }

    shift() {
        if(!this.head) {
            return null;
        }

        const removedNode = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;    
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }

        this.length--;
        return removedNode;
    }

    unshift(data) {
        const newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || this.length <= index) {
            return null;
        }

        let count, current = null;
        const center = parseInt(this.length / 2);
        
        if(center >= index) {
            current = this.head;
            count = 0;

            while(count !== index) {
                current = current.next;
                count++;
            }
        } else {
            current = this.tail;
            count = this.length - 1;

            while(count !== index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, data) {
        const currNode = this.get(index);

        if(currNode) {
            currNode.data = data;
            return true;
        }

        return false;
    }

    insert(index, data) {
        if(index < 0 || index >= this.length) {
            return false;
        }

        if(index === 0) {
            return this.unshift(data);
        }

        if(index === this.length - 1) {
            return this.push(data);
        }

        const prevNode = this.get(index - 1);
        const newNode = new Node(data);
        const nextNode = prevNode.next;
        
        // newNode.next = prevNode.next;
        // prevNode.next.prev = newNode;
        // newNode.prev = prevNode;
        // prevNode.next = newNode;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        const removedNode = this.get(index);

        if(!removedNode) {
            return false;
        }

        if(index === 0) {
            return this.shift();
        }

        if(index === this.length - 1) {
            return this.pop();
        }

        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.prev = null;
        removedNode.next = null;
        
        this.length--;
        return removedNode;
    }
}