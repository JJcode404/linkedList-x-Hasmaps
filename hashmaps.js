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
    return{
        bucket,
    }
     
};