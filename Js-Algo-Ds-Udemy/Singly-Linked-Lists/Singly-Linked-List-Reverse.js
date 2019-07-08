class Node {
    constructor(val) {
        this.val = val;
        this.head = null;
    }
}

class SinglyLinkedListPush {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(val) {
        if(!this.head) {
            return undefined;
        }
        var current = this.head;
        var newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if(!this.head) {
            return undefined;
        }
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if(this.length === 0){
            this.head = null;
        }
        return currentHead;
    }
    unShift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        // var index = new Node(val);
        var counter = 0;
        var current = this.head;
        if(index <=0 || index > this.length) {
            return null;
        }
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return !!this.push(val);
        }
        if (index === 0) {
            return !!this.unShift(val); // Beginning
        }
        var newNode = new Node(val);
        var preNode = this.get(index - 1);
        var temp = preNode.next;
        preNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift;
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    return this;
    }
}

var list = new SinglyLinkedList();
list.push(100);
list.push(150);
list.push(230);
list.push(300);
