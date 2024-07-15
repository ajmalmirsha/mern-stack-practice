// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class Bst {
//   constructor() {
//     this.root = null
//   }

//   insert(value) {
//     const node = new Node(value);
//     if (!this.root) {
//       this.root = node;
//     } else {
//       this.insertNode(node, this.root);
//     }
//   }

//   insertNode(node, root) {
//     if (!root) {
//       root = node;
//     } else {
//       if (node.value < root.value) {
//         if (!root.left) {
//           root.left = node;
//         } else {
//           this.insertNode(node, root.left);
//         }
//       } else {
//         if (!root.right) {
//           root.right = node;
//         } else {
//           this.insertNode(node, root.right);
//         }
//       }
//     }
//   }

//   isBst(root) {
//     if (!root) {
//       return true;
//     }
//     if (root.left && root.left > root.value) {
//       return false;
//     }
//     if (root.right && root.right < root.value) {
//       return false;
//     }

//     if (!this.isBst(root.left) || !this.isBst(root.right)) {
//       return false;
//     }

//     return true;
//   }

//   max(root){
//     if(!root.right)return console.log("Max is",root.value);
//     this.max(root.right)
//   }

//   min(root){
//     if(!root.left)return console.log("Max is",root.value);
//     this.max(root.left)
//   }

//   inOrder(root) {
//     if(root){
//         this.inOrder(root.left);
//         console.log(root.value);
//         this.inOrder(root.right);
//     }
//   }

//   preOrder(root){
//     if(root){
//         console.log(root.value);
//         this.preOrder(root.left)
//         this.preOrder(root.right)
//     }
//   }

//   postOrder(root){
//     if(root){
//         this.preOrder(root.left)
//         this.preOrder(root.right)
//         console.log(root.value);
//     }
//   }
// }

// const bst = new Bst();

// bst.insert(10);
// bst.insert(1);
// bst.insert(50);
// bst.insert(4);
// console.log(bst.isBst(bst.root));
// // bst.max(bst.root)
// // bst.min(bst.root)
// console.log("in order");
// bst.inOrder(bst.root);
// console.log("pre order");
// bst.preOrder(bst.root);
// console.log("post order");
// bst.postOrder(bst.root);

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class Bst {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const node = new Node(value);
//     if (!this.root) {
//       this.root = node;
//     } else {
//       this.insertNode(this.root, node);
//     }
//   }

//   insertNode(root, node) {
//     if (!root) {
//       root = node;
//     } else {
//       if (root.value > node.value) {
//         if (!root.left) {
//           root.left = node;
//         } else {
//           this.insertNode(root.left, node);
//         }
//       } else {
//         if (!root.right) {
//           root.right = node;
//         } else {
//           this.insertNode(root.right, node);
//         }
//       }
//     }
//   }

//   isBst(root) {
//     if (!root) return true;

//     if (root.left && root.value < root.left.value) {
//       return false;
//     }

//     if (root.right && root.value > root.right.value) {
//       return false;
//     }

//     if (!this.isBst(root.left) || !this.isBst(root.right)) {
//       return false;
//     }
//     return true;
//   }

//   inOrder(root) {
//     if (root) {
//       this.inOrder(root.left);
//       console.log(root.value);
//       this.inOrder(root.right);
//     }
//   }

//   preOrder(root) {
//     if (root) {
//       console.log(root.value);
//       this.preOrder(root.left);
//       this.preOrder(root.right);
//     }
//   }

//   min(root){
//     if(root.left){
//         this.min(root.left)
//     }else{
//         console.log("Min =", root.value);
//     }
//   }

//   max(root){
//     if(root.right){
//         this.max(root.right)
//     }else{
//         console.log("Max =", root.value);
//     }
//   }

//   postOrder(root) {
//     if (root) {
//       this.postOrder(root.left);
//       this.postOrder(root.right);
//       console.log(root.value);
//     }
//   }
// }

// const bst = new Bst();

// bst.insert(3);
// bst.insert(33);
// bst.insert(56);
// bst.insert(45);
// bst.insert(43);
// console.log(bst.isBst(bst.root));
// bst.inOrder(bst.root);
// bst.min(bst.root)
// bst.max(bst.root)
