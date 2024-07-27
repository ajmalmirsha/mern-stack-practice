// //---------------------------singly link---------------------------------

// class Node{
//     constructor(elem){
//         this.value=elem;
//         this.next=null;
//     }
// }

// class Linked{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//     }

//  addFirst(value){
//       let node=new Node(value);
//       if(!this.head){
//         this.head=node;
//         this.tail=node;
//       }else{
//         node.next=this.head;
//         this.head=node
//       }
//  }

//  addafterPos(elem,pos){
//     let node=new Node(elem)
//     if(!this.head){
//         this.head=node;
//         this.tail=node;
//     }else if(this.head.value==pos){
//     node.next=this.head.next;
//     this.head.next=node;
//     }else{
//         let temp=this.head
//         while(temp){
//             if(temp.value==pos){
//                 node.next=temp.next
//                 temp.next=node;

//                 return
//             }
//             temp=temp.next

//         }
//     }
//         }

// addPossBe(elem,pos){
//     let node=new Node(elem);
//     if(!this.head){
//         this.head=node;
//         this.tail=node;
//     }else if(this.head.value==pos){
//         node.next=this.head
//         this.head=node
//     }else{
//         let temp=this.head
//         while(temp.next){
//             if(temp.next.value==pos){
//                 node.next=temp.next
//                 temp.next=node
//                 return
//             }
//             temp=temp.next
//         }
//     }

// }

// addLast(val){
//     let node=new Node(val)
//     if(!this.head){
//         this.head=node
//         this.tail=node
//     }else{
//         this.tail.next=node;
//         this.tail=node
//     }

// }

// deletePos(val){
//    if(!this.head){
//     return "None"
//    }else if(this.head.value==val){
//     this.head=this.head.next
//          node.next=this.head.next
//    }else if(this.tail.value==val){
//        let temp=this.head
//        while(temp.next.next){
//         temp=temp.next
//        }
//        temp.next=null
//        this.tail=temp
//        return
//    }else{
//     let temp=this.head
//    while(temp){
//     if(temp.next.value==val){
//         temp.next=temp.next.next
//         return
//     }
//    }
//    }
// }

// deleteFirst(){
//    if(!this.head){
//     return false
//    }else{
//      this.head=this.head.next
//    }
// }

// deleteLast(){
//     if(!this.head){
//         return null;
//     }else{
//         let temp=this.head
//         while(temp.next.next){
//             temp=temp.next
//         }
//         temp.next=null;
//         this.tail=temp
//     }
// }

// revPrint(){
//     if(!this.head){
//         return null
//     }else{
//         let array=[]
//         let temp=this.head
//         while(temp){
//             array.push(temp.value)
//             temp=temp.next
//         }
//         while(array.length>0){
//             console.log(array.pop());
//         }
//     }
// }

// deleteDuplicates(){
//     let seen = {}
//     let current = this.head
//     let prev = null
//     while(current){
//       if(seen[current.value]){
//         prev.next = current.next
//       }else{
//         seen[current.value] = true
//         prev = current
//       }
//       current = current.next
//     }
//   }

//   findMid(){
//     if(!this.head){
//         return null;
//     }else{
//         let array=[]
//         let temp=this.head
//         while(temp){
//             array.push(temp)
//             temp=temp.next
//         }
//         let mid=Math.floor(array.length-1)/2
//         console.log(array[mid].value);
//     }
//     return
//   }

//  print(){
//     if(!this.head){
//         return "nothing"
//     }else{
//         let temp=this.head
//         while(temp){
//             console.log(temp.value);
//             temp=temp.next

//         }
//     }
//  }
// }

// let list=new Linked()

// list.addFirst(2)
// list.addFirst(7)
// list.addFirst(8)
// list.addafterPos(56,7)
// list.addPossBe(44,9)
// list.addLast(55)
// list.deletePos(7)
// list.deleteLast()
// list.deleteDuplicates()
// list.print()
//  list.findMid()
// list.revPrint()

// //-------------------------Double------------------------------------------

// class Node{
//     constructor(val){
//         this.prev =val
//         this.value=val
//         this.tail=null
//     }
// }

// class Linked{
//      constructor(){
//         this.head=null
//         this.tail=null
//      }

//      addFirst(val){
//         let node=new Node(val)
//         if(!this.head){
//             this.head=node;
//             this.tail=node;
//         }else{
//             node.next=this.head;
//             this.head.prev=node
//             this.head=node
//         }
//      }

//      addLast(val){
//         let node=new Node(val);
//         if(!this.head){
//             this.head=node;
//             this.tail=node
//         }else{
//             this.tail.next=node
//             node.prev=this.tail
//             this.tail=node
//         }
//      }

//      deleteFirst(){
//         if(!this.head){
//             return null;
//         }else{
//             this.head=this.head.next
//              this.head.prev=null
//         }
//      }

//      deleteLast(){
//         if(!this.head){
//             return null;
//         }else{
//             let temp=this.head
//             while(temp.next.next){
//            temp=temp.next
//             }
//            temp.next=null;
//            this.tail=temp
//         }
//      }

//    addAfterPos(val,pos){
//      let node=new Node(val)
//      if(!this.head){
//         return "Cant do it"
//      }else if(this.head.value==pos){
//         node.next=this.head.next
//         node.prev=this.head
//         this.head.next=node
//      }else if(this.tail.value==pos){
//         this.tail.next=node
//         node.prev=this.tail
//         this.tail=node
//      }else{
//         let temp =this.head
//         while(temp){
//             if(temp.value==pos){
//                 node.next=temp.next.next
//                 node.prev=temp
//                 temp.next=node
//                 return
//             }
//             temp=temp.next
//         }
//      }
//    }

//    addBeforePos(val,pos){
//     let node =new Node(val)
//     if(!this.head){
//         return "Cant do it"
//      }else if(this.head.value==pos){
//         this.head.prev=node
//         node.next=this.head
//         this.head=node
//      }else if(this.tail.value==pos){
//        let temp=this.head
//        while(temp.next.next){
//         temp=temp.next
//        }
//        node.prev=temp
//        node.next=temp.next
//        temp.next.prev=node
//        temp.next=node

//      }else{
//         let temp=this.head
//         while(temp){
//             if(temp.next.value==pos){
//                 node.next=temp.next
//                 temp.next=node
//                 node.prev=temp
//                 temp.next.prev=node
//                 return
//             }
//             temp=temp.next
//         }
//      }
//    }

// deletePos(val){
//     if(!this.head){
//         return null
//     }else if(this.head.value==val){
//         this.head=this.head.next
//         this.head.prev=null
//     }else if(this.tail.value==val){
//         let temp=this.head
//         while(temp.next.next){
//            temp=temp.next
//         }
//         temp.next=null
//         this.tail=temp
//     }else{
//         let temp=this.head
//         while(temp){
//             if(temp.next.value==val){
//                 temp.next.next.prev=temp
//                 temp.next=temp.next.next

//                 return
//             }
//             temp=temp.next
//         }
//     }
// }

// deleteDup(){
//     let seen={}
//     let current=this.head
//     let previ=null
//     while(current){
//         if(seen[current.value]){
//             if(current.next){
//                 current.next.prev=previ
//             }
//             previ.next=current.next

//         }else{
//             seen[current.value]=true
//             previ=current
//         }
//         current=current.next
//     }
// }
//   printRev(){
//     if(!this.head){
//         return null;
//     }else{
//         let array=[]
//         let temp=this.head
//         while(temp){
//             array.push(temp.value)
//             temp=temp.next
//         }
//         while(array.length>0){
//             console.log(array.pop());
//         }
//     }
//   }

//      print(){
//         if(!this.head){
//             return "NOthing to show"
//         }else{
//             let temp=this.head
//             while(temp){
//                 console.log(temp.value);
//                 temp=temp.next
//             }
//         }
//      }
// }

// let list=new Linked()
// list.addFirst(2)
// list.addFirst(6)
// list.addFirst(3)
// list.addFirst(9)
// list.addFirst(4)
// list.addFirst(7)
// list.addLast(22)
// list.addLast(55)
// list.addLast(55)
// list.addLast(88)
// list.addLast(44)
// list.addLast(55)
// list.addLast(55)
// list.addLast(55)
// list.addLast(55)
// list.deleteFirst()
// list.deleteLast()
// list.addAfterPos(666,22)
//  list.addBeforePos(777,44)
// list.deletePos(44)
//  list.deleteDup()
//  list.print()
// // list.find()
// list.printRev()

// function removeDuplicate(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         let temp = j;
//         while (temp >= arr.length - 1 && arr[temp]) {
//           [arr[temp], arr[temp + 1]] = [arr[temp + 1], arr[temp]];
//           temp++;
//         }
//         arr.length--
//       }
//     }
//   }
//   return arr
// }

// function removeDuplicates(arr) {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[j]) {
//       arr[j + 1] = arr[i];
//       j++;
//     }
//   }
//   return arr.splice(0, j + 1);
// }

// // console.log(removeDuplicates([234, 234, 5, 345, 523, 4]));
// // [234, 5, 345, 523, 523, 4]
// // j = 2

// const arr = [234, 234, 5, 345, 523, 4];

// function findLargest(arr) {
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   console.log(largest);
// }

// function secondLargest(arr) {
//   let largest = arr[0];
//   let secondLargest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   console.log(secondLargest);
// }

// function findSmallest(arr) {
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   console.log(smallest);
// }

// function secondSmallest(arr) {
//   let smallest = arr[0];
//   let Secondsmall = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       Secondsmall = smallest;
//       smallest = arr[i];
//     } else if (arr[i] < Secondsmall) {
//       Secondsmall = arr[i];
//     }
//   }
//   console.log(Secondsmall);
// }

// secondSmallest(arr);

// function removeDuplicates(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         if(arr[i] === arr[j]){
//             for (let s = j; s < arr.length; s++) {
//                 if(arr[s+1]){
//                     arr[s] = arr[s+1]
//                 }else{
//                     arr.length--
//                 }
//             }
//         }
//     }
//   }
//   return arr
// }


// console.log(removeDuplicates([423, 32, 423, 4234, 2, 234, 34, 34, 2]));
