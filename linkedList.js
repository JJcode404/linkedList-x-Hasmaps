function Node(data, next = null) {
    return {
        data,
        next
    };
}

function Linkedlist() {
    this.head = null;
    this.size = 0;

    this.AppendValue = function (data) {
        const newNode = Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    };

    this.PrependValue = function (data) {
        this.head = Node(data, this.head);
        this.size++;
    };

    this.getTail = function () {
        let tail = this.head;
        if (this.head == null) {
            return null;
        }
        while (tail.next !== null) {
            tail = tail.next;
        }
        return tail;
    };

    this.getDataAtIndex = function (index) {
        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === index) {
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null;
    };

    this.popOutLastNode = function () {
        const last = this.getTail();
        let current = this.head;
        this.size--;
        if (this.head == null) {
            return null;
        }
        if (this.head.next === null) {
            this.head = null;
            return null;
        }
        while (current.next.next !== null) {
            current = current.next;
        }
        current.next = null;
    };

    this.contains = function (value) {
        let current = this.head;
        while (current !== null) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    };

    this.find = function (value) {
        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (current.data === value) {
                return count;
            }
            count++;
            current = current.next;
        }
        return null;
    };

    return this;
}

const ll = new Linkedlist();
ll.AppendValue("amIndex0");
ll.AppendValue("amIndex1");
ll.AppendValue("amIndex2");
ll.contains("amIndexd1");
ll.find("amIndex1");

// ll.AppendValue("amIndex3");
// ll.PrependValue("amIndex4");
// ll.popOutLastNode();
// ll.popOutLastNode();
// ll.popOutLastNode();
// ll.popOutLastNode();

console.log(JSON.stringify(ll));
console.log(ll.toString());
console.log(ll.getDataAtIndex(0));

const fromLinkedList = "am on the other side hahahah";

export {
    Linkedlist,
    fromLinkedList
};
