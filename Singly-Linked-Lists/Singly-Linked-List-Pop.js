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
}

var list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("GOODBYE");
// list.push("!");