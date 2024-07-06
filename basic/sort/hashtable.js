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

//     display(){
//         for(let i=0; i<this.table.length; i++){
//             if(this.table[i]){
//                 console.log(this.table[i]);
//             }
//         }
//     }

// }

// const h = new hashTable(56)

// h.set('name','ajmal')
// h.set('name','nivas')
// h.set('hdjf','nivas')
// h.display()

// class hashTable {
//     constructor (size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         if(typeof key == 'string'){
//             let total = 0
//             for(let i=0; i<key.length; i++){
//                 total += key[i].charCodeAt()
//             }
//             return total % this.size
//         }
//         return key % this.size
//     }

//     insert(key,value){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] =  [[key,value]]
//         }else{
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//                 samekeyItem[1] = value
//             }else{
//                 bucket.push([key,value])
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

// const hash = new hashTable(5)

// hash.insert('name','ajmal')
// hash.insert('age',18)
// // hash.insert('name','ajmal')
// hash.display()

// class hashTable {
//     constructor (size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         if(typeof key == 'string'){
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
//                 bucket.push([[key,value]])
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//                 return samekeyItem
//             }else{
//                 return 'not found'
//             }
//         }
//         return 'not found index'
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

//     display () {
//         for(let i=0; i<this.table.length; i++){
//             if(this.table[i]){
//                 console.log(this.table[i]);
//             }
//         }
//     }
// }

// const h = new hashTable(9)

// h.set('name','ajmal')
// h.set('age',18)
// h.set('mane','aju')
// console.log(h.get('name'));
// h.delete('age')
// h.display()

// class hashTable {
//     constructor (size) {
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
//         const index  = this.hash(key)
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
//             const samekeyItem = bucket.find(item => item[0] === key)
//             if(samekeyItem){
//               this.table[index].length === 1  &&  this.table.splice(this.table.indexOf(bucket),1)
//                 bucket.splice(bucket.indexOf(samekeyItem),1)
//             }
//         }
//     }

//         display(){
//             for(let i=0; i<this.table.length; i++){
//                 if(this.table[i]){
//                     console.log(this.table[i]);
//                 }
//             }
//         }
//     }

//     const h = new hashTable(9)

//     h.set('name','ajmal')
//     h.set('mane','aju')
//     h.set('age',18)
//     console.log(h.get('age'));
//     h.remove('age')
//     h.display()

// class hashTable {
//     constructor (size) {
//         this.table = new Array()
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

// set(key,value){
//     const index = this.hash(key)
//     const bucket = this.table[index]
//     if(!bucket){
//         this.table[index] = [[key,value]]
//     }else{
//         const samekeyItem = bucket.find(item => item[0] === key)
//         if(samekeyItem){
//             samekeyItem[1] = value
//         }else{
//             bucket.push([key,value])
//         }
//     }
// }

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

//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const samekeyItem = bucket.find (item => item[0] === key)
//             if(samekeyItem){
//                 bucket.splice(bucket.indexOf(samekeyItem),1)
//             }
//         }
//     }

//     display() {
//         for(let i=0; i<this.table.length; i++){
//             if(this.table[i]){
//                 console.log(this.table[i]);
//             }
//         }
//     }
// }

// const h = new hashTable(5)

// h.set('name','aju')
// h.set('age',18)
// h.set('place','clt')
// h.set('edu','+2')
// h.set('stack','mern')
// h.set('curr','brotto')
// h.set('uygd','brokusdtto')
// h.remove('place')
// console.log(h.get('age'));
// h.display()

// class hashTable {
//   constructor(size) {
//     this.table = [];
//     this.size = size;
//   }

//   hash(key) {
//     if (typeof key === "string")
//       return (
//         key.split("").reduce((acc, curr) => acc + curr.charCodeAt(), 0) %
//         this.size
//       );
//     return key % this.size;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (!bucket) {
//       this.table[index] = [[key, value]];
//     } else {
//       const samekeyItem = bucket.find((item) => item[0] === key);
//       if (samekeyItem) {
//         samekeyItem[1] = value;
//       } else {
//         bucket.push([key, value]);
//       }
//     }
//   }

//   get(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (!bucket) return console.log("item not found!");
//     const samekeyItem = bucket.find((item) => item[0] === key);
//     if (samekeyItem) {
//       return console.log(samekeyItem[1]);
//     }
//     return console.log("item not found!");
//   }

//   remove(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (!bucket) return console.log("item not found");
//     const samekeyItem = bucket.find((item) => item[0] === key);
//     if(samekeyItem){
//         bucket.splice(bucket.indexOf(samekeyItem),1)
//     }
// }

//   print() {
//     this.table.map((x) => x && console.log(x));
//   }
// }

// const h = new hashTable(10);

// h.set("one", 1);
// h.set("two", 2);
// h.set("three", 3);
// h.set("four", 4);
// h.set("two", 22);
// h.get("two");
// h.remove("three")
// h.print();

// class HashTable {
//   constructor(size) {
//     this.size = size;
//     this.table = [];
//   }

//   hash(key) {
//     if (typeof key === "string") {
//       return key.split("").map((x) => x.charCodeAt()) % this.size;
//     }
//     return key % this.size;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     const bucket = this.table[index]
//     if(!bucket){
//         this.table[index] = [[key,value]]
//     }else{
//         const samekeyItem = bucket.find(item => item[0] === key);
//         if(samekeyItem){
//             samekeyItem[1] = value;
//         }else{
//             bucket.push([key, value])
//         }
//     }
//   }
// }

// class HashTable {
//   constructor(size) {
//     this.table = [];
//     this.size = size;
//   }

//   hash(key) {
//     if (typeof key === "string") {
//       let total = 0;
//       for (let i = 0; i < key.length; i++) {
//         total = +key[i].charCodeAt();
//       }
//       return total % this.size;
//     }
//     return key % this.size;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     let bucket = this.table[index];
//     if (!bucket) {
//       this.table[index] = [[key, value]];
//     } else {
//       do {
//         let hash = index
//         hash = this.hash(hash);
//         bucket = this.table[hash];
//         if(!bucket){
//           this.table[hash] = [[key, value]]
//         }
//       } while (!bucket);
//     }
//   }

//   get(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (!bucket) return console.log("item not found!");
//     const samekeyItem = bucket.find((item) => item[0] === key);
//     if (!samekeyItem) return console.log("item not found!");
//     console.log(samekeyItem[1]);
//   }

//   remove(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (bucket) {
//       const samekeyItem = bucket.find((item) => item[0] === key);
//       bucket.splice(bucket.indexOf(samekeyItem), 1);
//     } else {
//       console.log("item not found!");
//     }
//   }

//   display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(this.table[i]);
//       }
//     }
//   }
// }

// const h = new HashTable(6);

// h.set("name", "ajmal");
// h.set("age", 18);
// h.set("place", 10);
// h.set("name", "web dev");
// h.get("name");
// // h.remove("age");
// // h.get("age");
// // h.display();

// class HashTable {
//   constructor(size) {
//     this.table = [];
//     this.size = size;
//   }

//   hash(key) {
//     if (typeof key === "string") {
//       let total = 0;
//       for (let i = 0; i < key.length; i++) {
//           total += key[i].charCodeAt()
//       }
//       return total % this.size
//     }
//     return key % this.size
//   }

//   set (key, value){
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if(!bucket){
//       this.table[index] = [[key, value]]
//     }else{
//       const samekeyItem = bucket.find(item => item[0] === key)
//       if(samekeyItem){
//         samekeyItem[1] = value;
//       }else{
//         bucket.push([key, value])
//       }
//     }
//   }

//   get(key) {
//     const index = this.hash(key)
//   }
// }

// const map = new Map()

// function memo (fn) {
//   return (...args) => {
//     let key = `${args}`
//      if(map.has(key)){
//       return map.get(key)
//      }else{
//       const result = fn(...args)
//       map.set(key, result)
//       return result
//      }
//   }
// }

// const add = (a,b) =>{
//   console.log("add function")
//   return a + b
//   };

// const memoizedFn = memo(add)

// console.log(memoizedFn(10,30))
// console.log(memoizedFn(10,30))
// console.log(memoizedFn(10,20))
// console.log(map)

// const arr = [12, , 3, 4, 23, 3, [32, 3, 4], 3, 5, [32, 3, 4, 2]];

// const result = arr.flatMap((x) => {
//   console.log("X", x);
//   return x
// });

// console.log("result", result)

// function computeAmount() {
//   let result = 0;
//   const obj = {
//     lacs: (amount) => {
//       result += amount * 100000;
//       // console.log("lacs", result);
//       return obj;
//     },
//     thousand: (amount) => {
//       result += amount * 1000;
//       // console.log("thousand");
//       return obj;
//     },
//     crore: (amount) => {
//       result += amount * 10000000;
//       // console.log("crores");
//       return obj;
//     },
//     value: () => {
//       return result
//     }
//   };
//   return obj;
// }

// console.log(computeAmount().crore(1).lacs(2).thousand(5).value());


// const obj = {
//   helloWorld : function () {
//     return "hello world" + this.name;
//   },
//   name: "hello"
// }

// const obj2 = {
//   helloWorld : obj.helloWorld,
//   name: "bye"
// }

// console.log(obj.helloWorld())

