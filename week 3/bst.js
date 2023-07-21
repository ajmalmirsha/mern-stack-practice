

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



// class Node {
//     constructor (value) {
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }
// class Bst {
//     constructor (){
//         this.root = null
//     }
//     insert(value){
//         const node = new Node(value)
//         if(!this.root){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode (root,node){
//         if(root.value > node){
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

//     isBst(root){
//         if(!root){
//             return true
//         }
//         if(root.left && root.left.value > root.value){
//             return false
//         }
//         if(root.right && root.right.value < root.value){
//             return false
//         }
//         if(!this.isBst(root.left)||!this.isBst(root.right)){
//             return false
//         }
//         return true
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//            return this.min(root.left)
//         }
//     }

//     max(root){
//         if(root.right){
//            return this.max(root.right)
//         }else{
//             return root.value
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

// bst.insert(3)
// bst.insert(34)
// bst.insert(38)
// bst.inOrder(bst.root)
// console.log(bst.isBst(bst.root));
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));



// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class Bst {
//     constructor () {
//         this.root = null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(!this.root){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(root.value > node){
//             if(root.left){
//                 this.insertNode(root.left,node)
//             }else{
//                 root.left = node
//             }
//         }else{
//             if(root.right){
//                 this.insertNode(root.right,node)
//             }else{
//                 root.right = node
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
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

// bst.insert(3)
// bst.insert(34)
// bst.insert(6)
// bst.insert(7)
// bst.insert(3)
// bst.insert(43)
// bst.insert(34)
// bst.inOrder(bst.root)
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));





// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         const node = new Node(value)
//         if(this.root === null){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left === null){
//                 root.left = node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     emptyCheck(){
//         return this.root === null
//     }


//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value);
//             this.inorder(root.right)
//         } 
//     }

//     preOrder(root){
//         if(root){
//         console.log(root.value);
//         this.preOrder(root.left)
//         this.preOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);

//         }
//     }

//     IsBst(root){
//         if(root === null){
//             return true
//         }
//         if(!root.left === null && root.left.value > root.value){
//             return false
//         }
//         if(!root.right === null &&  root.right.value < root.value){
//             return false
//         }
//         if(!this.IsBst(root.left) || !this.IsBst(root.right)){
//             return false
//         }
//         return true
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     closestNum(target){
//         let currentNode = this.root
//         let closest = currentNode.value
//         while(currentNode){
//             if(Math.abs(target-closest)>Math.abs(target-currentNode.value)){
//                 closest = currentNode.value
//             }
//             if(target<currentNode.value){
//                 currentNode = currentNode.left
//             }else if(target > currentNode.value){
//                 currentNode = currentNode.right
//             }else{
//                 break
//             }
//         }
//         return closest
//     }


//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }
//     deleteNode(root,value){
//         if(!this.root){
//             return null
//         }else{
//             if(value < root.value){
//                 root.left = this.deleteNode(root.left,value)
//             }else if(value > root.value){
//                 root.right = this.deleteNode(root.right,value)
//             }else{
//                 if(!root.left && !root.right){
//                     return null
//                 }else if(!root.left){
//                     return root.right
//                 }else if(!root.right){
//                     return root.left
//                 }
//                 root.value = this.min(root.right)
//                 root.right = this.deleteNode(root.righ,root.value)
//             }
//             return root
//         }
//     }
    
// }

// const Bst = new BST()
// Bst.insert(50)
// Bst.insert(40)
// Bst.insert(30)
// Bst.insert(15)
// Bst.insert(68)
// Bst.insert(44)
// Bst.insert(99)

// console.log("Empty or not : "+Bst.emptyCheck());
// Bst.inorder(Bst.root)
// // Bst.preOrder(Bst.root)
// console.log("Bst or not : "+Bst.IsBst(Bst.root));
// console.log("smallest : "+Bst.min(Bst.root));
// console.log("biggest : "+Bst.max(Bst.root));
// console.log("closest num"+Bst.closestNum(90));



// class Node {
//     constructor (value) {
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
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }
//     insertNode(root,node){
//         if(root.value > node.value){
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

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
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

// bst.insert(3)
// bst.insert(4)
// bst.insert(5)
// bst.inOrder(bst.root)
// console.log(bst.min(bst.root));


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
//         const node = new Node(value)
//         if(!this.root){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(root.value > node.value ){
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

//     isBst(root){
//         if(!root){
//             return true
//         }
//         if(root.left && root.value < root.left){
//             return false
//         }
//         if(root.right && root.value > root.right){
//             return false
//         }

//         if(!this.isBst(root.left)||!this.isBst(root.right)){
//             return false
//         }
//         return true
//     }

//     min(root){
//         if(root.left){
//             return this.min(root.left)
//         }else{
//             return root.value
//         }
//     }

//     max(root){
//         if(root.right){
//             return this.max(root.right)
//         }else{
//             return root.value
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

// bst.insert(37)
// bst.insert(35)
// bst.insert(34)
// bst.insert(36)
// bst.inOrder(bst.root)
// console.log(bst.isBst(bst.root));
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));



class Node {
    constructor (value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Bst {
    constructor(){
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

    insertNode(root,node){
        if(root.value > node.value){
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

    isBst(root){
        if(!root){
            return true
        }
        if(root.left && root.value < root.left){
            return false
        }
        if(root.right && root.value > root.right){
            return false
        }
        if(!this.isBst(root.left)||!this.isBst(root.right)){
            return false
        }
        return true
    }

    min(root){
        if(root.left){
            return this.min(root.left)
        }else{
            return root.value
        }
    }

    max(root){
        if(root.right){
            return this.max(root.right)
        }else{
            return root.value
        }
    }

    postOrder(root){
        if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value);  
        }
        
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

}

const bst = new Bst()

bst.insert(43)
bst.insert(46)
bst.insert(4)
bst.insert(47)
bst.postOrder(bst.root)
console.log(bst.isBst(bst.root));
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
