class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglelysLikedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;
        let newTail = currentNode;

        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = newTail;
        newTail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return currentNode;
    }

    shift() {
        if (!this.head) {
            return null;
        }

        const currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift(data) {
        const currentHead = this.head;
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.head.next = currentHead;
        }

        this.length++;

        return null;
    }

    get(index) {
        if (index < 0 || index > this.length) {
            return null;
        } else {
            let counter = 0;
            let currentNode = this.head;

            while (counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }

            return currentNode;
        }
    }

    set(index, data) {
        const targetNode = this.get(index);

        if (targetNode) {
            targetNode.data = null;
            targetNode.data = data;
            return true;
        }

        return false;
    }

    insert(index, data) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === this.length) {
            this.push(data);
            return true;
        }

        if (index === 0) {
            this.unshift(data);
            return true;
        }

        const newNode = new Node(data);
        const prevNode = this.get(index - 1);

        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;

        return true;

        // if (index === 0) {
        //     this.unshift(data);
        //     return true;
        // } else {
        //     const newNode = new Node(data);

        //     const temp1 = this.get(index - 1);
        //     const temp2 = temp1.next;

        //     temp1.next = newNode;
        //     newNode.next = temp2;

        //     this.length++;

        //     if (!newNode.tail) {
        //         this.tail = newNode;
        //     }

        //     return true;
        // }
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return null;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        const prevNode = this.get(index - 1);

        const removeNode = prevNode.next;
        removeNode.next = null;

        prevNode.next = prevNode.next.next;
        this.length--;

        return removeNode;
    }

    reverse() {
        let counter = 0;
        let prevNode = null;
        let nextNode = null;

        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        while (counter++ < this.length) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }

        return this;
    }

    printAllNode() {
        let currentNode = this.head;
        let allNode = [];

        while (currentNode) {
            allNode.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return allNode;
    }
}
