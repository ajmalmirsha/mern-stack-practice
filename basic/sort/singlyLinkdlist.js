// class Node {
//     constructor (value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkdList {
//     constructor(){
//         this.head = null
//         this.tail = null
//     }

//     firstAdd (value) {
//        const node = new Node(value)
//        if( this.head ){
//           node.next = this.head
//           this.head = node
//        } else {
//         this.head = node
//         this.tail = node
//        }
//     }

//     lastAdd (value) {
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             this.tail = node
//         }
//     }

//     find(target){
//         if( this.head ){
//             let temp = this.head
//             while(temp){
//                if(temp.value === target ) return true
//                temp = temp.next
//             }
//             return false
//         }
//         return false
//     }

//     addAfter(pos,value){
//         if(!this.head){
//             return console.log('it is empty');
//         }
//         const node = new Node(value)
//         let temp = this.head
//         while(temp){
//             if(temp.value === pos){
//                 node.next = temp.next
//                 temp.next = node
//             }
//             temp = temp.next
//         }
//         return console.log('the item  not found');
//     }

//     addBefore (pos,value){
//         if(!this.head){
//            return console.log('it is empty');
//         }
//         const node = new Node(value)
//         let temp = this.head
//         while(temp.next){
//             if(temp.next.value === pos ){
//                node.next = temp.next
//                temp.next = node
//             }
//             temp = temp.next
//         }
//         return console.log('the item  not found');
//     }

//     addAtPos(pos,value){
//        if(!this.head){
//         return
//        }
//        const node = new Node(value)
//        if ( this.head.value === pos ){
//         node.next = this.head.next
//         this.head = node
//        } else{
//            let temp = this.head
//            while(temp){
//             if(temp.next.value === pos){
//                 node.next = temp.next.next
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//            }
//            return console.log('not found');
//        }
//     }

//     // addNextPos(pos,value){
//     //     let i = 0
//     //     let temp = this.head
//     //     while(temp){
//     //         if(i === pos){

//     //         }
//     //         i = i+1
//     //     }
//     // }

//     delete (value) {
//         if(!this.head){
//             return
//         }
//         let temp = this.head
//         while(temp){
//             if(temp.value === value){
//                 temp.next = temp.next.next
//             }
//             temp = temp.next
//         }
//     }

//     print(){
//         if(this.head){
//             let temp = this.head
//             while(temp){
//                 console.log(temp.value);
//                 temp = temp.next
//             }
//         }
//     }

// }

// const li = new linkdList()

// li.firstAdd(34)
// li.firstAdd(33)
// li.firstAdd(32)
// li.firstAdd(31)
// li.lastAdd(1)
// li.addAtPos(33,4)
// li.delete(32)
// // console.log(li.find(1876));
// // li.addAfter(33,5)
// // li.addBefore(33,4)

// li.print()

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class link {
//     constructor (){
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

//     lastAdd (value) {
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//             return
//         }
//         this.tail.next = node
//         this.tail = node
//     }

//     addAfterPos (pos,value){
//         if(!this.head){
//             return console.log('empty');
//         }
//         const node = new Node(value)
//         let temp = this.head
//         while(temp){
//             if( temp.value === pos ){
//                 node.next = temp.next
//                 temp.next = node
//             }
//             temp = temp.next
//         }
//     }

//     addBefore (pos,value){
//         if(!this.head){
//             return console.log('empty');
//         }
//         const node = new Node(value)
//         let temp = this.head
//         while(temp){
//             console.log(temp.next.value);
//             if(temp.next.value === pos){
//                 node.next = temp.next
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     addAtPos (pos,value){
//         if(!this.head) return console.log('empty');
//         const node = new Node(value)
//         let temp = this.head
//         while(temp){
//             if(temp.next.value === pos){
//                 node.next = temp.next.next
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     delete(pos){
//        !this.head && console.log(empty);
//        let temp = this.head
//        while( temp ){
//         if(this.head.value === pos){
//             this.head = this.head.next
//             return
//         }
//         if(temp.next.value == pos){
//             temp.next = temp.next.next
//             return
//         }
//         temp = temp.next
//        }
//        return false
//     }

//     deleteAfterPos (pos){
//         if(!this.head) return console.log('empty');
//         let temp = this.head
//         while(temp){
//             if(temp.value === pos){
//                 temp.next = temp.next.next
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     deleteBefore (pos) {
//         if(!this.head) return console.error('empty');
//         let temp = this.head

//         while(temp && temp.next){
//             if(temp.next.next.value === pos){
//                temp.next = temp.next.next
//                return
//             }
//             temp = temp.next
//         }

//     }

//     print(){
//         if(!this.head) return console.log('empty');
//         let temp = this.head
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//         }
// }

// const li = new link()

// // li.firstAdd(43)
// // li.lastAdd(5)
// li.firstAdd(44)
// li.firstAdd(45)
// li.firstAdd(46)
// li.firstAdd(49)
// // li.addAfterPos(44,77)
// // li.addBefore(44,55)
// // li.addAtPos(44,99)
// // li.delete(45)
// // li.deleteAfterPos(45)
// li.deleteBefore(45)

// li.print()

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linkdlist {
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

//     lastAdd (value) {
//        const node = new Node(value)
//        if(!this.head){
//         this.head = node
//         this.tail = node
//         return
//        }
//        this.tail.next = node
//        this.tail = node
//     }

//     addAtPos (pos,value){
//         if(!this.head){
//             return console.log('empty');
//         }
//         const node = new Node(value)
//         let temp = this.head
//         while(temp){
//             if(temp.next.value === pos){
//                 node.next = temp.next.next
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     addAfterPos(pos,value){
//         if(!this.head){
//             return console.log('empty');
//         }
//         const node = new Node(value)
//         let temp = this.head
//         while(temp){
//             if(temp.value === pos ){
//                 node.next = temp.next
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     addBefore (pos,value){
//         if(!this.head){
//             return console.log('empty');
//         }
//         let temp = this.head
//         const node = new Node(value)
//         while(temp){
//             if(temp.next.value === pos){
//                 node.next = temp.next
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
//             this.head = this.head.next
//             return
//         }
//         let temp = this.head
//         while(temp){
//             if(temp.next.value === pos){
//                 temp.next = temp.next.next
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     deleteBefore (pos,value){
//         if(!this.head){
//             return console.log(empty);
//         }
//         if(this.head.value === pos){
//             return console.log('it is not possible');
//         }else if(this.head.next.value){
//            return this.head = this.head.next
//         }
//         let temp = this.head
//         while(temp && temp.next){
//             if(temp.next.next.value === pos){
//                 temp.next = temp.next.next
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     //     deleteBefore (pos) {
//     //     if(!this.head) return console.error('empty');
//     //     let temp = this.head

//     //     while(temp && temp.next){
//     //         if(temp.next.next.value === pos){
//     //            temp.next = temp.next.next
//     //            return
//     //         }
//     //         temp = temp.next
//     //     }

//     // }

//     deleteAfter(pos){
//         if(!this.head){
//             return console.log('empty');
//         }
//         if(this.tail.value === pos){
//            return console.log('not possible');
//         }
//         let temp = this.head
//         while(temp){
//             if(temp.value === pos){
//                 temp.next = temp.next.next
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     middleElement(){
//         let mid = this.head
//         let temp = this.head.next
//         while(temp && temp.next){
//             mid = mid.next
//             temp = temp.next.next
//         }
//         console.log(mid.value);
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

// const li = new Linkdlist()

// li.firstAdd(34)
// li.firstAdd(35)
// // li.lastAdd(990)
// // li.firstAdd(36)
// // li.firstAdd(37)
// // li.addAtPos(35,99)
// // li.addAfterPos(990,89)
// // li.addBefore(36,89)
// // li.delete(89)
// // li.deleteBefore(36)
// // li.deleteAfter(990)
// // li.middleElement()
// li.print()

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Linkdlist {
//     constructor(){
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
//         this.tail.next = node
//         this.tail = node
//     }

//     addAfter(pos,value){
//         if(!this.head){
//             return console.log('empty');
//         }
//         const node = new Node(value)
//         let temp = this.head
//         while(temp){
//             if(temp.value === pos){
//                node.next = temp.next
//                temp.next = node
//                return
//             }
//             temp = temp.next
//         }
//     }

//     addBefore(pos,value){
//         if(!this.head){
//             return console.log('empty');
//         }
//         const node = new Node(value)
//         let temp = this.head
//         while(temp){
//             if(temp.next.value === pos){
//                 node.next = temp.next
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     replace (pos,value){
//         if(!this.head){
//             return console.log(empty);
//         }
//         let temp = this.head
//         const node = new Node(value)
//         if(this.head.value === pos){
//             node.next = this.head.next
//             this.head = node
//             return
//         }
//         while(temp){
//             if(temp.next.value === pos){
//                 node.next = temp.next.next
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     remove (pos){
//         if(!this.head){
//             return console.log('empty');
//         }
//         if(this.head.value === pos){
//             this.head = this.head.next
//             return
//         }

//         let temp = this.head
//         while(temp){
//             if(temp.next.value === pos){
//                 temp.next = temp.next.next
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     removeAfter (pos){
//         if(!this.head){
//             return console.log('empty');
//         }
//         let temp = this.head
//         while(temp){
//             if(temp.value === pos){
//                 temp.next = temp.next.next
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     removeBefore (pos){
//          if(!this.head){
//             return console.log('empty');
//         }
//         let temp = this.head
//         while(temp){
//             if(temp.next.next.value === pos){
//                 temp.next = temp.next.next
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     print(){
//         let temp = this.head
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }
//     }

// }

// const li = new Linkdlist()

// li.firstAdd(5)
// li.lastAdd(9)
// li.firstAdd(4)
// li.firstAdd(3)
// li.addBefore(4,66)
// li.addAfter(3,34)
// li.replace(3,33)
// li.remove(9)
// li.removeAfter(4)
// li.removeBefore(4)
// li.print()

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class Linkdlist {
//     constructor(){
//         this.head = null
//         this.tail = null
//     }

//     firstAdd (value) {
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//             return
//         }
//         node.next = this.head
//         this.head = node
//     }

//     lastAdd (value)  {
//         const node = new Node(value)
//         if(!this.head){
//             this.head = node
//             this.tail = node
//             return
//         }
//         this.tail.next = node
//         this.tail = node
//     }

//     delete(pos) {
//         if(!this.head){
//             return console.log('empty');
//         }else {
//             let temp = this.head
//             while(temp){
//                 if(temp.next.value === pos){
//                     temp.next = temp.next.next
//                     return
//                 }
//                 temp = temp.next
//             }
//         }
//     }

//     addAtPos (pos,value) {
//         const node = new Node(value)
//         if(!this.head){
//             return console.log('empty');
//         }else{
//             let temp = this.head
//             while(temp){
//                 if(temp.next.value === pos){
//                     node.next = temp.next.next
//                     temp.next = node
//                     return
//                 }
//                 temp = temp.next
//             }
//         }
//     }

//     addAfterPos(pos,value){
//         const node = new Node(value)
//         if(!this.head){
//             return console.log('empty');
//         }else{
//             let temp = this.head
//             while(temp){
//                 if(temp.value === pos){
//                     node.next = temp.next
//                     temp.next = node
//                     return
//                 }
//                 temp = temp.next
//             }
//         }
//     }

//     addBeforePos(pos,value){
//         const node = new Node(value)
//         if(!this.head){
//             return console.log('empty');
//         }
//         let temp = this.head
//         while(temp){
//             if(temp.next.value === pos){
//                 node.next = temp.next
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     deleteBefore(pos){
//         if(!this.head){
//             return console.log('empty');
//         }else {
//             let temp = this.head
//             while(temp){
//                 if(temp.next.next.value === pos){
//                     temp.next = temp.next.next
//                     return
//                 }
//                 temp = temp.next
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

// const li = new Linkdlist()

// li.firstAdd(3)
// li.firstAdd(4)
// li.lastAdd(435)
// li.firstAdd(5)
// li.firstAdd(6)
// li.addAtPos(4,8)
// li.delete(8)
// li.addAfterPos(3,44)
// li.addBeforePos(3,33)
// li.deleteBefore(3)
// li.display()

// const arr = [3,234,234,23,4,2354,3]

// console.log(  JSON.stringify(arr));
// console.log( arr);

// const result = JSON.stringify(arr)

// console.log(JSON.parse(result));

// class Node {
//     constructor (value) {
//         this.value = value
//         this.next = null
//     }
// }

// class Linkdlist {
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

//         this.tail.next = node
//         this.tail = node
//     }

//     delete(pos){
//         let temp = this.head
//         if(this.head.value === pos){
//             this.head = this.head.next
//             return
//         }
//         while(temp){
//             if(temp.next.value === pos){
//                 temp.next = temp.next.next
//                 return
//             }

//             temp = temp.next
//         }
//     }

//     addAtPos(pos,value){
//         const node = new Node(value)

//         let temp = this.head
//         while(temp){
//             if( temp.next.value === pos ){
//                 node.next = temp.next.next
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     addAfter(pos,value){
//         const node = new Node(value)
//         let temp = this.head
//         while(temp){
//             if(temp.value === pos){
//                 node.next = temp.next
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     addBefore(pos,value){
//         const node = new Node(value)
//         let temp = this.head
//         while(temp){
//             if(temp.next.value === pos){
//                 node.next = temp.next
//                 temp.next = node
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     deleteBefore(pos){
//         let temp = this.head
//         if(this.head.value === pos){
//             return
//         }
//         while(temp){
//             if(temp.next.next.value === pos){
//                 temp.next = temp.next.next
//                 return
//             }
//             temp = temp.next
//         }
//     }

//     display (){
//         let temp = this.head
//         while(temp){
//             console.log(temp.value);
//             temp = temp.next
//         }

//     }

// }

// const li = new Linkdlist()

// li.firstAdd(23)
// li.firstAdd(24)
// li.lastAdd(90)
// li.firstAdd(25)
// li.firstAdd(26)
// li.delete(26)
// // li.addAtPos(24,8989)
// li.addAfter(24,8989)
// li.addBefore(24,8787)
// li.deleteBefore(90)
// li.display()

// class Node {
//     constructor (value) {
//       this.value = value;
//       this.next = null;
//     }
// }

// class linkdList {
//     constructor () {
//         this.head = null;
//         this.tail = null;
//     }

//     firstAdd (value) {
//       const node = new Node(value);

//       if(!this.head){
//         this.head = node;
//         this.tail = node;
//         return
//       }

//       node.next = this.head;
//       this.head = node
//     }

//     lastAdd (value) {
//       const node = new Node(value);
//       if(!this.head){
//         this.head = node;
//         this.tail = node;
//         return
//       }

//       this.tail.next = node;
//       this.tail = node;

//     }

//     addAtPos(pos, value){
//       const node = new Node(value)
//       if(!this.head){
//         return console.log("list is empty")
//       }
//       let temp = this.head;
//       if(temp.value === pos){
//           node.next = temp.next;
//           this.head = node;
//       }
//       if(this.tail.value === pos){
//         this.tail.next = node;
//         this.tail = node;
//     }
//       while(temp){
//         if(temp.next.value === pos){
//           node.next = temp.next.next;
//           temp.next = node;
//         }
//         temp = temp.next;
//         return
//       }
//     }

//     addAfterPos(pos, value){
//       const node = new Node(value);
//       if(!this.head) return console.log("list is empty");
//       let temp = this.head;
//       while(temp){
//         if(temp.value === pos){
//           node.next = temp.next;
//           temp.next = node;
//           return
//         }
//         temp = temp.next;
//       }
//     }

//     addBeforePos (pos, value){
//       const node = new Node(value);
//       if(!this.head) return console.log("list is empty");
//       let temp = this.head;
//       if(temp.value === pos){
//         node.next = this.head;
//         this.head = node;
//         return
//       }
//       while (temp) {
//         if(temp.next.value === pos){
//           node.next = temp.next;
//           temp.next = node;
//           return
//         }
//         temp = temp.next;
//       }
//     }

//     delete (pos) {
//        if(!this.head) return console.log("list is empty");
//        let temp = this.head;
//       if(temp.value === pos) return this.head = this.head.next;
//        while(temp){
//         if(temp.next.value === pos){
//           temp.next = temp.next.next
//           return
//         }
//         temp = temp.next;
//        }
//     }

//     deleteBefore (pos) {
//         if(!this.head) return console.log("list is empty!");
//         let temp = this.head;
//         if(temp.value === pos) return console.log("the position is matching to head!")
//         while (temp) {
//           if(temp.next.next.value === pos){
//               temp.next = temp.next.next;
//               return
//           }
//           temp = temp.next
//         }
//     }

//     display () {
//         let temp = this.head;
//         while(temp){
//             console.log(temp.value)
//             temp = temp.next;
//         }
//     }
// }

// const li = new linkdList()

// li.lastAdd(3)
// li.lastAdd(4)
// li.lastAdd(5)
// li.addAtPos(5,55)
// li.addAfterPos(3,67)
// li.addBeforePos(3,64)
// li.deleteBefore(64)
// // li.delete(64)
// li.display()

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class linkdList {
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
//     this.tail.next = node;
//     this.tail = node;
//   }

//   addAfter(pos, value) {
//     const node = new Node(value);
//     let temp = this.head;
//     while (temp) {
//       if (temp.value === pos) {
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

// const li = new linkdList();

// li.firstAdd(3);
// li.firstAdd(5);
// li.firstAdd(7);
// li.firstAdd(9);
// li.firstAdd(11);
// li.addAfter(9, 5);
// li.lastAdd(9);
// li.lastAdd(4);
// li.display()

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class linkdList {
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
//       this.head = node;
//     }
//   }

//   lastAdd(value) {
//     const node = new Node(value);

//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//   }

//   find(target) {
//     if (!this.head) {
//       return console.log("list is empty!");
//     }

//     let temp = this.head;
//     let pos = 0;
//     while (temp) {
//       pos += 1;
//       if (temp.value === target) {
//         return console.log("item found at " + pos);
//       }
//       temp = temp.next;
//     }
//   }

//   addAtPos(pos, value) {
//     const node = new Node(value);
//     if (!this.head) return console.log("the list is empty");
//     let temp = this.head;

//     while (temp) {
//       if (temp.next.value === pos) {
//         node.next = temp.next.next;
//         temp.next = node;
//         return;
//       }
//       temp = temp.next;
//     }
//   }

//   addAfterPos(pos, value) {
//     if (!this.head) return console.log("list is empty");
//     const node = new Node(value);
//     let temp = this.head;
//     while(temp){
//       if(pos === temp.value){
//         node.next = temp.next;
//         temp.next = node;
//         return
//       }
//       temp = temp.next
//     }
//   }


//   addBefore(pos , value) {
//     if (!this.head) return console.log("list is empty");
//     const node = new Node(value)
//     let temp = this.head
//     while (temp) {
//       if(temp.next.value === pos){
//         node.next = temp.next;
//         temp.next = node;
//         return
//       }
//       temp = temp.next
//     }
//   }

//   delete (pos) {
//     let temp = this.head;

//     while (temp) {
//       if(temp.next.value === pos){
//         temp.next = temp.next.next;
//         return
//       }
//       temp = temp.next
//     }
//   }

//   print() {
//     let temp = this.head;
//     while (temp) {
//       console.log(temp.value);
//       temp = temp.next;
//     }
//   }
// }

// const li = new linkdList();

// li.firstAdd(23);
// li.firstAdd(24);
// li.firstAdd(25);
// li.firstAdd(26);
// li.firstAdd(27);
// li.lastAdd(7);
// li.lastAdd(8);
// li.find(24);
// li.addAtPos(25, 66);
// li.addAfterPos(26, 66);
// li.delete(26)
// li.addBefore(10 - 3,88)
// li.print();


class Node {
  constructor (value) {
    this.value = value;
    this.next = null
  }
}

class Linkdlist {
  constructor () {
    this.head = null;
    this.tail = null;
  }
  firstAdd (value) {
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      this.tail = node;
    }else{
      node.next = this.head;
      this.head = node;
    }
  } 

  lastAdd (value){
    const node = new Node(value);
    if(!this.head){
      this.head = node;
      this.tail = node;
    }else{
      this.tail.next = node;
      this.tail = node;
    }
  }

  display (){
    let temp = this.head;
    while(temp){
      console.log(temp.value)
      temp = temp.next;
    }
  }
}

const li = new Linkdlist()

li.firstAdd(3)
li.firstAdd(4)
li.firstAdd(5)
li.lastAdd(6)
li.display()