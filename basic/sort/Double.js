// class Node {
//     constructor(value){
//         this.prev = null
//         this.value = value
//         this.next = null
//     }
// }

// class Double {
//     constructor (){
//         this.head = null
//         this.tail = null
//     }

//     firstAdd (value){
//         const node = new Node(value)
//         if(!this.head){
//            this.head = node
//            this.tail = node
//            return
//         }
//         node.next = this.head
//         this.head.prev = node
//         this.head = node
//     }

//     Print () {
//         if(this.head){
//             let temp = this.head
//             while(temp){
//                 console.log(temp.value);
//                 temp = temp.next
//             }
//         }
//     }

// }

// const db = new Double()

// db.firstAdd(44)
// db.firstAdd(42)
// db.firstAdd(45)
// db.Print()

// class Node {
//     constructor(value){
//         this.value = value
//         this.prev = null
//         this.next = null
//     }
// }

// class Double {
//     constructor(){
//         this.head = null
//         this.tail = null
//     }

//     firstAdd (value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//             return
//         }
//         node.next = this.head
//         this.head = node
//     }

//     lastAdd (value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//             return
//         }
//         node.prev = this.tail
//         this.tail.next = node
//         this.tail = node
//     }

//     addAfter (pos,value){
//         if(!this.head){
//             return console.log('empty');
//         }
//         if(this.tail.value === pos){
//             return console.log('not possible');
//         }
//         const node = new Node(value)
//         let temp = this.head
//         while(temp){
//            if(temp.value === pos){
//             node.prev = temp
//             node.next = temp.next
//             temp.next.prev = node
//             temp.next = node
//             return
//            }
//            temp = temp.next
//         }
//     }

//     addBefore (pos,value){
//         if(!this.head){
//             return console.log('empty');
//         }
//         const node = new Node(value)
//         if(this.head.value === pos){
//             this.head.prev = node
//             node.next  = this.head
//             this.head = node
//             return
//         }
//         let temp = this.head
//         while(temp){
//             if(temp.next.value === pos){
//                 temp.next.prev = node
//                 node.next = temp.next
//                 node.prev = temp
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     delete(pos){
//         if(!this.head){
//             return console.log('empty');
//         }
//         if(this.head.value === pos){
//           return  this.head = this.head.next
//         }
//         if(this.tail.value === pos){
//           return  this.tail = this.tail.prev
//         }
//         let temp = this.head
//         while(temp){
//             if(temp.value === pos){
//                 temp.next.prev = temp.prev
//                 temp.next = temp.next.next
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     print(){
//         if(!this.head){
//             return console.log('empty');
//         }
//         let temp = this.head
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }
// }

// const db = new Double()

// db.firstAdd(45)
// db.lastAdd(78)
// db.firstAdd(46)
// db.firstAdd(47)
// db.addAfter(46,90)
// db.addBefore(46,89)
// db.delete(90)
// db.print()

// class Node {
//     constructor(value){
//         this.prev = null
//         this.value = value
//         this.next = null
//     }
// }

// class double {
//     constructor () {
//         this.head = null
//         this.tail = null
//     }

//     fristAdd(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//             return
//         }
//         this.head.prev = node
//         node.next = this.head
//         this.head = node
//     }

//     lastAdd (value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//             return
//         }
//         node.prev = this.tail
//         this.tail.next = node
//         this.tail = node
//     }

//     remove (pos){
//         if(!this.head){
//         return console.log('empty');
//         }
//         let temp = this.head
//         while(temp){
//             if(temp.next.value === pos){
//                temp.next.next.prev = temp
//                temp.next =
//             }
//         }
//     }

//     display () {
//         if(!this.head){
//             return console.log('empty');
//         }
//         let temp = this.head
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }

// }

// const db = new double()

// db.fristAdd(3)
// db.fristAdd(4)
// db.lastAdd(6)
// db.fristAdd(5)
// db.display()

// var i = 1;
// for (;i<4;){
//   i = i + 1;
// }

// function oddMultiplyer (n) {
//     let odd = 1
//     let sum = odd
//     for(let i=1; i<n; i++){
//     sum *= odd
//     odd += 2
//     }

//     return sum
//     }

//     console.log(oddMultiplyer(4));

// class Node {
//     constructor (value) {
//         this.value = value
//         this.prev = null
//         this.next = null
//     }
// }

// class DLinkdlist {
//     constructor () {
//         this.head = null
//         this.tail = null
//     }

//     firstAdd(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//             return
//         }
//         this.head.prev = node
//         node.next = this.head
//         this.head = node
//     }

//     lastAdd(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//             return
//         }

//         node.prev = this.tail
//         this.tail.next = node
//         this.tail = node
//     }

//     addAtPos(pos, value){
//         const node = new Node(value)

//         let temp = this.head

//         while(temp){
//             if(temp.next.value === pos){
//                 node.next = temp.next.next
//                 temp.next.prev = node
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     delete(pos){
//         let temp = this.head
//         while(temp){
//             if(temp.value === pos){
//                 temp.next.prev = temp.prev
//                 temp.prev.next = temp.next
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     display () {
//         let temp = this.head
//         while (temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }

// }

// const dl = new DLinkdlist()

// dl.firstAdd(43)
// dl.lastAdd(99)
// dl.firstAdd(44)
// dl.firstAdd(45)
// dl.delete(44)
// // dl.addAtPos(43,77)
// dl.display()

// class Node {
//   constructor(value) {
//     this.prev = null;
//     this.value = value;
//     this.next = null;
//   }
// }

// class DoubleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   firstAdd(value) {
//     const node = new Node(value);
//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//       return;
//     }

//     this.head.prev = node;
//     node.next = this.head;
//     this.head = node;
//   }

//   lastAdd(value) {
//     const node = new Node(value);
//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//       return;
//     }
//     node.prev = this.tail;
//     this.tail.next = node;
//     this.tail = node;
//   }

//   addAtPos(pos, value) {
//     if (!this.head) return console.log("list is empty!");
//     const node = new Node(value);

//     let temp = this.head;

//     while (temp) {
//       if (temp.next.value === pos) {
//         node.next = temp.next.next;
//         node.prev = temp;
//         temp.next.next.prev = node;
//         temp.next = node;
//         return;
//       }
//       temp = temp.next;
//     }
//   }

//   addAfter(pos, value) {
//     if (!this.head) return console.log("list is empty");
//     const node = new Node(value);

//     let temp = this.head;

//     while (temp) {
//       if (temp.value === pos) {
//         node.next = temp.next;
//         node.prev = temp;
//         temp.next = node;
//         return;
//       }
//       temp = temp.next;
//     }
//   }

//   addBefore(pos, value) {
//     if (!this.head) return console.log("list is empty");
//     const node = new Node(value);
//     let temp = this.head;
//     if (temp.value === pos) {
//       node.next = this.head;
//       this.head.prev = node;
//       this.head = node;
//       return;
//     }
//     while (temp) {
//       if (temp.next.value === pos) {
//         node.prev = temp.next;
//         node.next = temp.next;
//         temp.next = node;
//         return;
//       }
//       temp = temp.next;
//     }
//   }

//   display() {
//     let temp = this.head;
//     while (temp) {
//       console.log(temp.value);
//       temp = temp.next;
//     }
//   }
// }

// const dl = new DoubleLinkedList();

// dl.firstAdd(3);
// dl.firstAdd(4);
// dl.firstAdd(6);
// dl.lastAdd(7);
// dl.lastAdd(8);
// dl.lastAdd(9);
// dl.addAtPos(7, 77);
// dl.addAfter(77, 88);
// dl.addBefore(6, 10);
// dl.display();

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DLinkdlist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   firstAdd(value) {
//     const node = new Node(value);
//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head.prev = node;
//       this.head = node;
//     }
//   }

//   lastAdd(value) {
//     const node = new Node(value);
//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       node.prev = this.tail;
//       this.tail.next = node;
//       this.tail = node;
//     }
//   }

//   addAtPos(pos, value) {
//     if (!this.head) return console.log("list is empty!");
//     let temp = this.head;
//     const node = new Node(value);
//     while (temp) {
//       if (temp.value === pos) {
//         node.prev = temp.prev;
//         node.next = temp.next;
//         temp.next.prev = node;
//         temp.prev.next = node;
//       }
//       temp = temp.next;
//     }
//   }

//   addAfter(pos, value) {
//     if (!this.head) return console.log("list is empty!");
//     let temp = this.head;
//     const node = new Node(value);

//     while (temp) {
//       if (temp.value === pos) {
//         node.prev = temp;
//         node.next = temp.next;
//         temp.next = node;
//         temp = null;
//       } else {
//         temp = temp.next;
//       }
//     }
//   }

//   addBefore (pos, value) {
//     const node = new Node(value);

//       let temp = this.head;
//       if(temp.value === pos) {
//         this.head.prev = node;
//         node.next = this.head;
//         console.log("hai")
//         return
//       }
//       while (temp) {
//         if(temp.value === pos){
//           node.prev = temp.prev;
//           node.next = temp;
//           temp.prev.next = node;
//           temp.prev = node;
//           return
//         }
//         temp = temp.next
//       }

//   }

//   print() {
//     if (!this.head) return console.log("list is empty!");
//     let temp = this.head;
//     while (temp) {
//       console.log(temp.value);
//       temp = temp.next;
//     }
//   }
// }

// const d = new DLinkdlist();

// d.firstAdd(3);
// d.firstAdd(4);
// d.firstAdd(5);
// d.firstAdd(63);
// d.lastAdd(99);
// d.lastAdd(88);
// d.addAtPos(4, 44);
// d.addAfter(63, 33);
// d.addBefore(63,5)
// d.print();
