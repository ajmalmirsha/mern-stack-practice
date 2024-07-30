// class Node {
//      constructor(value){
//         this.value = value
//         this.next = null
//      }
// }

// class Stack {
//     constructor(){
//         this.top = null
//     }

//     push(value){
//         const node = new Node(value)
//         if(!this.top){
//             this.top = node
//             return
//         }
//         node.next = this.top
//         this.top = node
//     }

//     pop(){
//         if(!this.top) return console.log('empty');
//         this.top = this.top.next
//     }

//     print () {
//         if(!this.top) return console.log('empty');
//         let temp = this.top
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }
// }

// const st = new Stack()

// st.push(90)
// st.push(91)
// st.push(92)
// st.pop()
// st.print()

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor (){
//         this.top = null
//     }

//     push(value){
//         const node = new Node(value)
//         if(!this.top){
//             this.top = node
//             return
//         }
//         node.next = this.top
//         this.top = node
//     }

//     pop(){
//         if(!this.top){
//             return console.log('empty');
//         }
//         this.top = this.top.next
//     }

//     print () {
//         if(!this.top){
//             return console.log('empty');
//         }
//         let temp = this.top
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }
// }

// const st = new Stack()

// st.push(234)
// st.push(235)
// st.push(236)
// st.pop()
// st.print()

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor(){
//         this.top = null
//     }
//     push(value){
//         const node = new Node(value)
//         if(this.top){
//             this.top = node
//             return
//         }
//         this.top.next = node
//         node.next = this.top
//         this.top = node
//     }
//     pop(){
//         if(!this.top){
//             return console.log('empty');
//         }
//         this.top = this.top.next
//     }

//     display(){
//         if(!this.top){
//             return console.log('empty');
//         }
//         let temp = this.top
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }
// }

// const st = new Stack()

// st.push(34)
// st.push(33)
// st.push(32)
// st.push(31)
// st.display()

// let k = 1

// for (let i = 0; i < 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//       row += k + ' ';
//       k++;
//     }
//     console.log(row);
//   }

// class Node {
//     constructor (value){
//         this.value = value
//         this.next = null
//     }
// }

// class stack {
//     constructor (){
//         this.top = null
//     }

//     push (value){
//         const node = new Node(value)
//         if(!this.top){
//             this.top = node
//             return
//         }
//         node.next = this.top
//         this.top = node
//     }

//     pop(value){
//         const node = new Node(value)
//         if(!this.top){
//             this.top = node
//             return
//         }
//         this.top = this.top.next
//     }

//     display () {
//         if(!this.top){
//             return console.log('empty');
//         }
//         let temp = this.top
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }
// }

// const st = new stack()

// st.push(45)
// st.push(46)
// st.push(47)
// st.push(48)
// st.pop()
// st.display()

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack {
//     constructor (){
//         this.top = null
//     }
//     push(value){
//         const node = new Node(value)
//         if(!this.top){
//             this.top = node
//         } else {
//             node.next = this.top
//             this.top = node
//         }
//     }

//     pop () {
//         if(!this.top){
//             return console.log('empty');
//         }
//         this.top = this.top.next
//     }

//     display(){
//         if(!this.top){
//             return console.log('empty');
//         }else{
//             let temp = this.top
//             while(temp){
//                 console.log(temp.value);
//                 temp = temp.next
//             }
//         }
//     }
// }

// const st = new Stack()

// st.push(43)
// st.push(45)
// st.push(46)
// st.pop()
// st.display()

// class Node {
//     constructor (value) {
//         this.value = value
//         this.next = null
//     }
// }

// class stack {
//     constructor () {
//         this.top = null
//     }

//     push(value) {
//         const node = new Node(value)
//         if(!this.top){
//             this.top = node
//         }else{
//             node.next = this.top
//             this.top = node
//         }
//     }

//     pop(){
//         this.top = this.top.next
//     }

//     display() {
//         let temp = this.top
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }
// }

// const st = new stack()

// st.push(34)
// st.push(35)
// st.push(36)
// st.pop()
// st.display()

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null
//     }

//     push(value){
//         const node = new Node(value);
//         if(!this.top){
//             this.top = node;
//         } else {
//             node.next = this.top;
//             this.top =  node
//         }
//     }

//     pop(value){
//         const node = new Node(value);
//         if(!this.top){
//             console.log("stack underflow")
//         } else {
//             console.log(this.top.value)
//             this.top =  this.top.next
//         }
//     }
// }

// const s = new Stack()

// s.push(3)
// s.push(4)
// s.push(5)
// s.push(6)
// s.push(7)
// s.pop()
// s.pop()
// s.pop()

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Stack {
//   constructor() {
//     this.top = null;
//   }

//   push(value) {
//     const node = new Node(value);
//     if (!this.top) {
//       this.top = node;
//     } else {
//       node.next = this.top;
//       this.top = node;
//     }
//   }

//   pop() {
//     if (!this.top) return console.log("stack underflow");
//     console.log(this.top.value);
//     this.top = this.top.next;
//   }

//   display() {
//     let temp = this.top;
//     while (temp) {
//       console.log(temp.value);
//       temp = temp.next;
//     }
//   }
// }

// const s = new Stack();

// s.push(3);
// s.push(4);
// s.push(5);
// s.push(6);
// s.pop();
// s.pop();
// s.pop();
// s.pop();
// s.pop();
// s.pop();

// // s.display()

// const handler = {
//   get: (target, property,value) => {
//     console.log("on get target", target, value);
//   },
//   set: (target, property, value) => {
//     console.log("on set target", target);
//   },
// };
// const obj = {
//   name: "ajmal",
//   age: 19,
// };
// const proxy = new Proxy(obj, handler);
// proxy.name = "aju";
// console.log(proxy.name);
