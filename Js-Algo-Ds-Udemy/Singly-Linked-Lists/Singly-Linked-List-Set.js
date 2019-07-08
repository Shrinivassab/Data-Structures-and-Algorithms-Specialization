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
}

var list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("GOODBYE");
// list.push("!");
