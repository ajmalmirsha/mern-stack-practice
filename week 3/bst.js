

// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Bst {
//     constructor(){
//         this.root = null
//     }
//     insert(value){
//         const  node = new Node(value)
//         if(!this.root){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(!root.left){
//                 root.left = node
//             }else {
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(!root.right){
//                 root.right = node
//             }else {
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     inOrder(root){
//         if(root){
//             console.log(root.value);
//             this.inOrder(root.left)
//             this.inOrder(root.right)
//         }
//     }
// }


// const bst = new Bst()

// bst.insert(34)
// bst.insert(4)
// bst.insert(64)
// bst.insert(54)
// bst.inOrder(bst.root)


// class Node {
//     constructor (value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Bst {
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(!this.root){
//         this.root = node
//         }else {
//             this.insertNode(this.root,node)
//         }

//     }
//     insertNode(root,node){
//         if(node.value < root.value){
//             if(!root.left){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(!root.right){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     inOrder(root){
//         if(root){
//             console.log(root.value);
//             this.inOrder(root.left)
//             this.inOrder(root.right)
//         }
//     }
// }


// const bst = new Bst()

// bst.insert(23)
// bst.insert(24)
// bst.insert(25)
// bst.inOrder(bst.root)



class Node {
    constructor (value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class Bst {
    constructor (){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(!this.root){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode (root,node){
        if(root.value > node){
            if(!root.left){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(!root.right){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    

    inOrder(root){
        if(root){
            console.log(root.value);
            this.inOrder(root.left)
            this.inOrder(root.right)
        }
    }
}



const bst = new Bst()

bst.insert(3)
bst.insert(34)
bst.insert(38)
bst.inOrder(bst.root)
