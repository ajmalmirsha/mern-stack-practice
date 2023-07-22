// class Graph {
//     constructor(){
//         this.graph = new Map()
//     }

//     addToGraph(data){
//         this.graph.set(data, new Array())
//     }
//     insert(vertex,edges,isbidirectional){
//         if(!this.graph.get(vertex)){
//             this.addToGraph(vertex)
//         }
//         if(!this.graph.get(edges)){
//             this.addToGraph(edges)
//         }
//         this.graph.get(vertex).push(edges)
//         if(isbidirectional){
//             this.graph.get(edges).push(vertex)
//         }
//     }

//     display(){
//         for(let vertex of this.graph.keys()){
//             const edges = this.graph.get(vertex)
//             console.log(vertex, edges);
//         }
//     }
// }

// const gp = new Graph()

// gp.insert(3,5,true)
// gp.insert(43,7)
// gp.insert(23,98)
// gp.display()


class Node {
    constructor (value) {
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
            
        }
    }
}