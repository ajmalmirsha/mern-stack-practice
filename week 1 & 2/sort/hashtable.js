// class hashTable {
//     constructor(size) {
//       this.table = new Array(size);
//       this.size = size;
//     }
  
//     hash(key) {
//       if (typeof key === "string") {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//           total += key.charCodeAt(i);
//         }
//         return total % this.size;
//       }
//       return key % this.size;
//     }
  
//     set(key, value) {
//       const index = this.hash(key);
//       // this.table [index] = value
//       const bucket = this.table[index];
//       if (!bucket) {
//         this.table[index] = [[key, value]];
//       } else {
//         const samekeyItem = bucket.find((item) => item[0] === key);
//         if (samekeyItem) {
//           samekeyItem[1] = value;
//         } else {
//           bucket.push([key, value]);
//         }
//       }
//     }
  
//     get(key) {
//       const index = this.hash(key);
//       // return this.table[index]
//       const bucket = this.table[index];
//       if (bucket) {
//         const samekeyItem = bucket.find((item) => item[0] === key);
//         if (samekeyItem) {
//           return samekeyItem[1];
//         }
//       }
//       return undefined;
//     }
//     remove(key) {
//       const index = this.hash(key);
//       // this.table[index] = undefined;
//       const bucket = this.table[index];
//       if (bucket) {
//         const samekeyItem = bucket.find((item) => item[0] === key);
//         if (samekeyItem) {
//           bucket.splice(bucket.indexOf(samekeyItem), 1);
//         }
//       }
//     }
  
//     display() {
//       for (let i = 0; i < this.table.length; i++) {
//         if (this.table[i]) {
//           console.log(i, this.table[i]);
//         }
//       }
//     }
//   }
  
//   const table = new hashTable(50);
  
//   table.set("name", "muhsin");
//   table.set("mane", "muhsin");
//   table.set("age", "22");
//   // table.display();
//   // console.log(table.get("name"));
//   // table.set("mane", "dfg");
//   table.remove("name")
  
//   table.display();



// class hashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         if(typeof key === 'string'){
//             let total = 0
//             for(let i=0; i<key.length; i++){
//                 total += key[i].charCodeAt()
//             }
//             return total % this.size
//         }else {
//             return key % this.size
//         }
//     }

//     set(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//                 samekeyItem[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             return console.log('not found');
//         }else{
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//                 return samekeyItem[1]
//             }
//         }
//     }

//     delete(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//                 bucket.splice(bucket.indexOf(samekeyItem),1)
//             }
//         }
//     }

//     print(){
//         for(let i=0; i<this.table.length; i++){
//             if(this.table[i]){
//                 console.log(this.table[i])
//             }
//         }
//     }

// }

// const hash = new hashTable(5)

// hash.set('mane','ajmal')
// hash.set('name','amal')
// console.log(hash.get('name'));
// hash.delete('mane')
// hash.print()



// class hashTable {
//     constructor(size){
//         this.size = size
//         this.table = new Array(size)
//     }

//     hash(key){
//         if(typeof key === 'string'){
//             let total = 0
//             for(let i=0; i<key.length; i++){
//                 total += key[i].charCodeAt()
//             }
//             return total % this.size
//         }
//         return key % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//                 samekeyItem[1] = value
//             }else{
//                 samekeyItem.push([key,value])
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//                 return samekeyItem[1]
//             }
//         }
//     }

//     remove (key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//                 bucket.splice(bucket.indexOf(samekeyItem),1)
//             }
//         }
//     }

//     display(){
//         for(let i=0; i<this.table.length; i++){
//             if(this.table[i]){
//                 console.log(this.table[i]);
//             }
//         }
//     }
// }

// const h = new hashTable(7)

// h.set('name','ajmal')
// h.set('name','ajmalkk')
// h.set('age',89)
// console.log(h.get('age'));
// h.remove('name')
// h.display()



// class hashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         if(typeof key === 'string'){
//             let total = 0
//             for(let i=0; i<key.length; i++){
//                 total += key[i].charCodeAt()
//             }
//             return total % this.size
//         }
//         return key % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         }else{
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//                 samekeyItem[1] = value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//                 return samekeyItem[1]
//             }
//         }
//     }

//     remove (key) {
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const samekeyItem  = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//                 bucket.splice(bucket.indexOf(samekeyItem),1)
//             }
//         }
//     }

//     display () {
//         for(let i=0; i<this.table.length; i++){
//             if(this.table[i]){
//                 console.log(this.table[i]);
//             }
//         }
//     }
// }


// const h = new hashTable(6)

// h.set('name','ajmal')
// h.set('age',33)
// h.set('place','clt')
// h.set('name','aju')
// console.log(h.get('age'));
// h.remove('place')

// h.display()


class hashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        if(typeof key === 'string'){
            let total = 0
            for(let i=0; i<key.length; i++){
                total += key[i].charCodeAt()
            }
            return total % this.size
        }
        return key % this.size
    }


    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const samekeyItem = bucket.find(item => item[0] === key)
            if(samekeyItem){
                samekeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    display(){
        for(let i=0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(this.table[i]);
            }
        }
    }

}

const h = new hashTable(56)

h.set('name','ajmal')
h.set('name','nivas')
h.display()