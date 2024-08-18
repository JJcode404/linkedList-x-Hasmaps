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
  this.length = () => {
    let size = 0;
    for(let i = 0; i < this.bucket.length; i++){
      if(this.bucket[i] instanceof Linkedlist){
        const length = this.bucket[i].size
        size += length
      }
    }
    return size; 
}
this.keys = () => {
  let arrayOfkeys = []
  for(let i = 0; i < this.bucket.length; i++){
    if(this.bucket[i] instanceof Linkedlist){
      arrayOfkeys.push(this.bucket[i].key())
    }
  }
  return arrayOfkeys;
}
this.values = () => {
  let arrayOfvalues = []
  for(let i = 0; i < this.bucket.length; i++){
    if(this.bucket[i] instanceof Linkedlist){
      arrayOfvalues.push(this.bucket[i].value())
    }
  }
  return arrayOfvalues;
}
this.entries = () => {
  let arrayOfEntries = [];

  for(let i = 0; i < this.bucket.length; i++) {
    let current = this.bucket[i];

    if(current instanceof Linkedlist) {
      arrayOfEntries.push(...current.getEntries());
    }
  }

  return arrayOfEntries;
};



this.clear = () => {
  for(let i = 0; i < this.bucket.length; i++){
    this.bucket[i] = null;
  }
}
return this;
}

const test = new Hashmaps(); 
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')


// console.log(hash.get("mango"))
// console.log(hash.has("mangod"))
// hash.remove("mango")
// hash.remove("thisKey")
// hash.clear();
console.log(test.length())
console.log(test.entries())

console.log(console.log(JSON.stringify(test.bucket)));


