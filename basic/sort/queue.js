// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Queue  {
//     constructor () {
//         this.front = null
//         this.back = null
//     }

//     enqueue (value) {
//         const node = new Node(value)
//         if(!this.front){
//             this.front = node
//             this.back = node
//             return
//         }
//         this.back.next = node
//         this.back = node

//     }

//     dequeue () {
//         if(!this.front) return console.log('empty');
//         this.front = this.front.next
//     }

//     print () {
//         if(!this.front) return console.log('empty');
//         let temp = this.front
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }

//     }
// }

// const q = new Queue()

// q.enqueue(55)
// q.enqueue(54)
// q.enqueue(53)
// q.dequeue()
// q.print()

// class Node {
//     constructor (value){
//         this.value = value
//         this.next = null
//     }
// }

// class queue {
//     constructor(){
//         this.front = null
//         this.back = null
//     }

//     enqueue (value) {
//         const node = new Node(value)
//         if(!this.front){
//             this.front = node
//             this.back = node
//             return
//         }
//         this.back.next = node
//         this.back = node
//     }

//     dequeue(){
//         if(!this.front){
//             return console.log('empty');
//         }
//         this.front = this.front.next
//     }

//     print () {
//         if(!this.front){
//             return console.log('empty');
//         }
//         let temp = this.front
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }
// }

// const q = new queue()

// q.enqueue(45)
// q.enqueue(46)
// q.enqueue(47)
// q.enqueue(48)
// q.dequeue()
// q.print()

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Queue {
//     constructor (){
//         this.front = null
//         this.back = null
//     }

//     enqueue(value){
//         const node = new Node(value)
//         if(!this.front){

//         }
//     }
// }

// function a (age) {
//     console.log(`${this.name}${age}`);
// }

// const obj = {
//     name :'ajmal'
// }

// let dd = a.bind(obj,'agr')

// dd()

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Queue {
//     constructor (value) {
//         this.front = null
//         this.back = null
//     }

// }

// function lo (g) {
//     console.log(g);
//     console.log(this.age);
//     // console.log(b);
// }

// const obj = {
//     age:7
// }

// const ag = ['ajml','nivas']

// const abs = lo.bind(obj,89)

// abs(['poo','loo'])

// const a  = 'ajmal'

// a.

// function person (name) {
//     this.name = 'name'
// }

// person.prototype.ll = function () {
//     console.log(this.name);
// }

// const data = new person('nivas')

// data.ll()

// class Node {
//     constructor (value){
//         this.value = value
//         this.next = null
//     }
// }

// class Queue {
//     constructor(){
//         this.front = null
//         this.back = null
//     }

//     enqueue(value){
//         const node = new Node(value)
//         if(!this.front){
//             this.front = node
//             this.back = node
//             return
//         }

//         this.back.next = node
//         this.back = node
//     }

//     dequeue(){
//         if(!this.front){
//             return console.log('empty');
//         }
//         this.front = this.front.next
//     }

//     display (){
//         if(!this.front){
//             console.log('empty');
//         }
//         let temp = this.front
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }

// }

// const q = new Queue()

// q.enqueue(35)
// q.enqueue(36)
// q.enqueue(37)
// q.enqueue(38)
// q.dequeue()
// q.display()

// class Node {
//     constructor (value) {
//         this.value = value
//         this.next = null
//     }
// }

// class queue {
//     constructor () {
//         this.front = null
//         this.rear = null
//     }

//     enqueue(value){
//         const node = new Node(value)
//         if(!this.front){
//             this.front = node
//             this.rear = node
//         }else{
//             this.rear.next = node
//             this.rear = node
//         }
//     }

//     dequeue(){
//         this.front = this.front.next
//     }

//     display () {
//         let temp = this.front
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }
// }

// const q = new queue()

// q.enqueue(3)
// q.enqueue(4)
// q.enqueue(5)
// q.enqueue(6)
// q.dequeue()
// q.display()

// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }

// class Queue {
//     constructor(){
//         this.front = null;
//         this.rear = null;
//     }

//     enqueue(value){
//         const node = new Node(value)
//         if(!this.front){
//             this.front = node;
//             this.rear = node;
//         } else {
//             this.rear.next = node;
//             this.rear = node;
//         }
//     }

//     dequeue () {
//         if(!this.front) return console.log("queue is empty");;
//         console.log(this.front.value);
//         this.front = this.front.next;
//     }
// }

// const q = new Queue()

// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.dequeue()
// q.dequeue()
// q.dequeue()
// q.dequeue()

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.front = null;
//     this.rear = null;
//   }

//   enqueue(value) {
//     const node = new Node(value);
//     if (!this.front) {
//       this.front = node;
//       this.rear = node;
//     } else {
//       this.rear.next = node;
//       this.rear = node;
//     }
//   }

//   dequeue() {
//     if (!this.front) return console.log("queue is empty!");
//     console.log(this.front.value);
//     this.front = this.front.next
//   }
// }

// const q = new Queue()

// q.enqueue(5)
// q.enqueue(6)
// q.enqueue(7)
// q.dequeue()
// q.dequeue()
// q.dequeue()
// q.dequeue()