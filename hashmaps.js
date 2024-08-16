import { Linkedlist, fromLinkedList } from "./linkedList.js";

function Hashmaps() {
    this.bucket = new Array(16);
    
    this.hash = (key) => {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return Math.abs(hashCode) % this.bucket.length;
    };
    
    this.set = (key, value) => {
      const index = this.hash(key);
      if (!this.bucket[index]) {
          const ll = new Linkedlist();
          ll.AppendValue([key, value]);
          this.bucket[index] = ll;
      } else {
          const existingLL = this.bucket[index];
          if (existingLL instanceof Linkedlist) {
              existingLL.AppendValue([key, value]);
          } else {
              const ll = new LinkedList();
              ll.AppendValue(existingLL);
              ll.AppendValue([key, value]);
              this.bucket[index] = ll;
          }
      }
      console.log(JSON.stringify(this.bucket));
  };
  this.get = (key) => {
    for(let i = 0; i < this.bucket.length; i++){
      if(this.bucket[i] instanceof Linkedlist){
        const found = this.bucket[i].contains(key);
        if (found) {
          return true;
        }
      }
    }
    return false; 
  }
  
    return this;
}

const hash = new Hashmaps(); 
hash.set("thisKey", "am a value");
hash.set("thisKey", "am a value neww");
hash.set("mango", "am a value");
console.log(hash.get("thisKey"))

console.log(fromLinkedList);

