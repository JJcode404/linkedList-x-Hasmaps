function Node(data, next = null){
    return{
        data,
        next
    }
};
function Linkedlist(){
    this.head = null
    this.size = 0;
    function AppendValue (data){
        const newNode = Node(data);
        if(this.head == null){
            this.head = newNode;
        }else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = newNode;
            // console.log(current.next)
        }
        this.size++
    }
    function PrependValue(data){
        this.head = Node(data, this.head);
        this.size++
    }
    function getTail(){
        let tail = this.head
        if(this.head == null){
            return null;
        }
        while(tail.next !== null){
            tail = tail.next
        }
        return tail;
    }
    function getDataAtIndex(index){
  
        let current = this.head;
        let count = 0;
        while (current !== null) {
            console.log(current)
            if (count === index) {
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null;
    }
    function popOutLastNode(){
        const last = this.getTail(); 
        let current = this.head;
        this.size--;
        if(this.head == null){
            return null;
        }
        // console.log(last)
        if(this.head.next === null){
            this.head = null;
            return null
        }
        while(current.next.next !== null){
            current = current.next;
        }
        current.next = null;
    }
}