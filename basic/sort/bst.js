class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(node, this.root);
    }
  }

  insertNode(node, root) {
    if (!root) {
      root = node;
    } else {
      if (node.value < root.value) {
        if (!root.left) {
          root.left = node;
        } else {
          this.insertNode(node, root.left);
        }
      } else {
        if (!root.right) {
          root.right = node;
        } else {
          this.insertNode(node, root.right);
        }
      }
    }
  }

  isBst(root) {
    if (!root) {
      return true;
    }
    if (root.left && root.left > root.value) {
      return false;
    }
    if (root.right && root.right < root.value) {
      return false;
    }

    if (!this.isBst(root.left) || !this.isBst(root.right)) {
      return false;
    }

    return true;
  }

  max(root){
    if(!root.right)return console.log("Max is",root.value);
    this.max(root.right)
  }

  min(root){
    if(!root.left)return console.log("Max is",root.value);
    this.max(root.left)
  }

  print(root) {
    if (!!root) {
      console.log(root.value);
      this.print(root.left);
      this.print(root.right);
    }
  }
}

const bst = new Bst();

bst.insert(10);
bst.insert(1);
bst.insert(50);
bst.insert(4);
console.log(bst.isBst(bst.root));
bst.max(bst.root)
bst.min(bst.root)
bst.print(bst.root);
