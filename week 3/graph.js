

// class Graph {
//     constructor (){
//         this.graph = new Map()
//     }

//     addToMap(data){
//         this.graph.set(data,new Array())
//     }
//     insert(vertex,edge,isbidirectional){
//         if(!this.graph.has(vertex)){
//             this.addToMap(vertex)
//         }
//         if(!this.graph.has(edge)){
//             this.addToMap(edge)
//         }
//         this.graph.get(vertex).push(edge)
//         if(isbidirectional){
//         this.graph.get(edge).push(vertex)
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

// gp.insert(343,5)
// gp.insert(34,5,true)
// gp.insert(43,8)
// gp.display()



// class Graph {
//     constructor (){
//         this.graph = new Map()
//     }

//     addToMap(data){
//         this.graph.set(data, new Array())
//     }

//     insert(vertex,edges,isbidirectional){
//         if(!this.graph.has(vertex)){
//             this.addToMap(vertex)
//         }
//         if(!this.graph.has(edges)){
//             this.addToMap(edges)
//         }
//         this.graph.get(vertex).push(edges)
//         if(isbidirectional){
//             this.graph.get(edges).push(vertex)
//         }
//     }

//     display (){
//         for(let vertex of this.graph.keys()){
//             const edges = this.graph.get(vertex)
//             console.log(vertex, edges);
//         }
//     }

// }

// const gp = new Graph()

// gp.insert(5,89,true)
// gp.insert(5,9,true)
// gp.insert(5,9,true)
// gp.display()



// class Graph {
//     constructor () {
//         this.graph = new Map()
//     }
    
//     addToMap(data){
//         this.graph.set(data, new Array())
//     }
//     insert(vertex,edge,isbidirectional){
//         if(!this.graph.has(vertex)){
//             this.addToMap(vertex)
//         }
//         if(!this.graph.has(edge)){
//             this.addToMap(edge)
//         }
//         this.graph.get(vertex).push(edge)
//         if(isbidirectional){
//             this.graph.get(edge).push(vertex)
//         }
//     }

//     display(){
//         for(let vertex of this.graph.keys()){
//             const edges = this.graph.get(vertex)
//             conso le.log(vertex, edges);
//         }
//     }
// }

// const gp = new Graph()

// gp.insert(90,9)
// gp.insert(90,6)
// gp.insert(90,7)
// gp.display()



// function check (){
//    if(0 === false){ 
//     console.log('hello');
//    }
// }

// check()


// function * abc (){
//     console.log('hai');
//     yield
//     console.log('hello');
//     // yield
//     console.log('yeild 2');
// }

// const obj =  abc()

// obj.next()
// obj.next()
// obj.throw()
