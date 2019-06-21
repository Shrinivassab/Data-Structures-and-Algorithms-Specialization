class Node {
    constructor(val) {
        this.val = val;
        this.head = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        var poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        var shiftedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = shiftedNode.next;
            this.head.prev = null;
            shiftedNode.next = null;
        }
        this.length--;
        return  shiftedNode;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            // var previousHead = this.head;
            // this.head = newNode;
            // this.head.next = previousHead;
            // previousHead.prev = this.head;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        var halfWayPoint = this.length/2;
        var currentIndex;
        var counter;

        if (index <= halfWayPoint) {
            currentIndex = this.head;
            counter = 0;
            while (counter !== index) {
                currentIndex = currentIndex.next;
                counter++;
            }
        } else {
            currentIndex = this.tail;
            counter = this.length;
            while (counter !== index) {
                currentIndex = currentIndex.prev;
                counter--;
            }
        }
        return currentIndex;
    }
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            this.unshift(val);
        }
        if (index === this.length) {
            this.push(val);
        } else {
            var previousNode = this.get(index - 1);
            var nextNode = previousNode.next;
            var newNode = new Node(val);

            previousNode.next = newNode;
            newNode.prev = previousNode;
            newNode.next = nextNode;
            nextNode.prev = newNode;
        }
        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        var removedNode = this.get(index);
        var preNode = removedNode.prev;
        var nextNode = removedNode.next;

        preNode.next = nextNode;
        nextNode.prev = preNode;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }

    reverse() {
        if (!this.head) {
            return undefined;
        }

        var node = this.head;
        this.head = this.tail;
        this.tail = node;

        var counter = 0;
        var prev = null;
        let next;

        while (counter < this.length) {
            next = node.next;
            node.prev = next;
            node.next = prev;
            prev = node;
            node = next;
            counter++;
        }
        return this;
    }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
