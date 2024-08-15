function hashmaps(){
    this.bucket = new Array(16);
    this.hash = (key) => {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return Math.abs(hashCode) % this.bucket.length;
      } 
      this.set = (key,value) => {
        const index = this.hash(key)
        this.bucket[index] = this.bucket[index] || [];
        this.bucket[index].push([key, value])
        console.log(this.bucket);
    };
    return{
        bucket,
        set
    }
     
};
const hash = hashmaps();
hash.set("thisKey","am a value");
hash.set("thisKey","am a value neww");
hash.set("mango","am a value");
