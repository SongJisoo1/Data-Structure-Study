class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if(this.root === null) {
            this.root = newNode;
            return this;

        } else {
            let currentNode = this.root;

            while(true) {
                if(data === currentNode.data) return null;

                if(data < currentNode.data) {
                    if(currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (data > currentNode.data) {
                    if(currentNode.right === null) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    contain(data) {
        if(this.root === null) return false;

        let currentNode = this.root;
        let flag = false;

        while(currentNode && !flag) {
            if(data < currentNode.data) {
                currentNode = currentNode.left;
            } else if (data > currentNode.data) {
                currentNode = currentNode.right;
            } else {
                flag = true;
                break;
            }
        }

        return flag;
    }
}