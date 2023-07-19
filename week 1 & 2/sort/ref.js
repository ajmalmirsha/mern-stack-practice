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