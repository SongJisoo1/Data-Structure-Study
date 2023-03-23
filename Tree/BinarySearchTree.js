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

    bfs() {
        const data = [];
        const queue = [];
        let node = this.root;

        queue.push(node);

        while(queue.length) {
            node = queue.shift();
            data.push(node.data);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        return data;
    }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

const result = tree.bfs();
console.log(result);