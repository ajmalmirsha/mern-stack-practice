

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
//             this.graph.get(edge).push(vertex)
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

// gp.insert(32,5,true)
// gp.insert(32,6,false)
// gp.insert(2,6,false)
// gp.display()


// 0 ? console.log(true) : console.log(false)

// console.log(0 ?? true);

// const set = new Set()

// set.add(10)
// set.add(10)
// set.add(15)
// set.add(15)
// set.add(15.8)
// set.add(15)
// console


// class Person {
//     constructor(name,age){
//     this.name = name
//     this.age = age 
//     }

// }

// const p = new Person('ajmal',18)

// console.log(p.name);
// console.log(p.age);

// const arr = [1,2,3,4,5]
// const sum = arr.reduce((acc,prev) => {return acc+prev },0)

// console.log(sum);



// const arr = [34,45,43,53,45]

// const result = arr.reduce






// const arr = ['!','world',' ','hello']

// hello world!

// console.log(arr.reverse().join(''));

// const result = arr.reduceRight((acc,curr)=>{
//     return acc + curr
// },)

// console.log(result);



// const target = {
//     name: "John",
//     age: 30
//   };
  
//   const handler = {
//     get: function(target, property) {
//       console.log(`Accessing property: ${property}`);
//       return target[property];
//     },
//     set: function(target, property, value) {
//       console.log(`Setting property: ${property} to ${value}`);
//       target[property] = value;
//     }
//   };
  
//   const proxy = new Proxy(target, handler);
  
// //   console.log(proxy.name); // Output: Accessing property: name \n John
  
//   proxy.age = 35; // Output: Setting property: age to 35
  
// //   console.log(proxy.age); // Output: Accessing property: age \n 35
  

// class Graph {
//     constructor (){
//         this.graph = new Map()
//     }

//     addToMap(data){
//         this.graph.set(data,new Array())
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
//             console.log(vertex,edges);
//         }
//     }
// }


// const gp = new Graph()

// gp.insert(34,5)
// gp.insert(3,5)
// gp.insert(4,5)
// gp.insert(4,15)
// gp.display()

// const search = document.getElementById('search')

// search.onchange((e)=>{
//     console.log('sd');
//     console.log(e.target.value,'sd');
// })




// let obj = [
//     {
//       name:"Ameen",
//       mark : [
//         {
//           subject:"Maths",
//           marks:30
//         },
//         {
//           subject:"Malayalam",
//           marks:45
//         },
//         {
//           subject:"Physics",
//           marks:35
//         },
//         {
//           subject:"Chemistry",
//           marks:38
//         },
//       ]
//     },
//     {
//       name:"Vishnu",
//       mark : [
//         {
//           subject:"Maths",
//           marks:56
//         },
//         {
//           subject:"Malayalam",
//           marks:37
//         },
//         {
//           subject:"Physics",
//           marks:45
//         },
//         {
//           subject:"Chemistry",
//           marks:44
//         },
//       ]
//     },
//     {
//       name:"Jaseel",
//       mark : [
//         {
//           subject:"Maths",
//           marks:43
//         },
//         {
//           subject:"Malayalam",
//           marks:40
//         },
//         {
//           subject:"Physics",
//           marks:39
//         },
//         {
//           subject:"Chemistry",
//           marks:29
//         },
//       ]
//     },
//     {
//       name:"Adhil",
//       mark : [
//         {
//           subject:"Maths",
//           marks:49
//         },
//         {
//           subject:"Malayalam",
//           marks:37
//         },
//         {
//           subject:"Physics",
//           marks:28
//         },
//         {
//           subject:"Chemistry",
//           marks:29
//         },
//       ]
//     }
//   ]



//   const result = obj.map((x) => {
//       const data = x.mark.filter((y)=>{
//          return y.marks > 40
//         })
//         return {
//             name:x.name,
//             mark:data
//         }

//   })

//   console.log(JSON.stringify(result,null,2));

// sayName()

// var sayName = () => {
    
// }

// const arr = ['flower','ajmal','flow']

// for(let i=0; i<arr.length; i++){
//     let k = 0
//     for(let j=0; j<arr[i].length; j++){
//         if(arr[i][j] === arr[i][k] ){
//             k++
//         }
//     }
// }



// class Graph {
//     constructor () {
//         this.graph = new Map()
//     }

//     addToMap(data){
//         this.graph.set(data, new Array())
//     }
//     insert(vertex,edge,isbidirectional){
//         if(!this.graph.has(vertex)){
//            this.addToMap(vertex)
//         }
//          if(!this.graph.has(edge)){
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
//             console.log(vertex, edges);
//         }
//     }
// }

// const gp = new Graph()

// gp.insert(43,54)
// gp.insert(45,4,true)
// gp.insert(46,345)
// gp.insert(48,345)
// gp.display()


class Graph {
    constructor(){
        this.graph = new Map()
    }

    addToGraph(data){
        this.graph.set(data, new Array())
    }
    insert(vertex,edge,isbidirectional){
        if(!this.graph.get(vertex)){
            this.addToGraph(vertex)
        }
        if(!this.graph.get(edge)){
            this.addToGraph(edge)
        }
        this.graph.get(vertex).push(edge)
        if(isbidirectional){
            this.graph.get(edge).push(vertex)
        }
    }

    display(){
        for(let vertex of this.graph.keys()){
            const edges = this.graph.get(vertex)
            console.log(vertex,edges);
        }
    }
}

const gp = new Graph()

gp.insert(4,82)
gp.insert(445,23)
gp.insert(454,3)
gp.insert(42,43,true)
gp.display()