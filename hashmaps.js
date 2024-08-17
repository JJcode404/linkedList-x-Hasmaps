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
  };
  this.get = (key) => {
    for(let i = 0; i < this.bucket.length; i++){
      if(this.bucket[i] instanceof Linkedlist){
        const found = this.bucket[i].find(key);
        if (found) {
          return found;
        }
      }
    }
    return null; 
  }
  this.has = (key) =>{
    for(let i = 0; i < this.bucket.length; i++){
      if(this.bucket[i] instanceof Linkedlist){
        const found = this.bucket[i].contains(key);
        if (found) {
          return found;
        }
      }
    }
    return false; 
  }
  this.remove = (key) => {
    for(let i = 0; i < this.bucket.length; i++){
      if(this.bucket[i] instanceof Linkedlist){
        const found = this.bucket[i].valueTodelete(key);
        const index = this.bucket.findIndex(bucketItem => {
          return bucketItem && bucketItem.head === found;
      });
      if (index !== -1) {
        this.bucket.splice(index, 1); 
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
hash.set("mango", "am a value for mango");
// console.log(hash.get("mango"))
// console.log(hash.has("mangod"))
hash.remove("mango")
hash.remove("thisKey")




console.log(console.log(JSON.stringify(hash.bucket)));

