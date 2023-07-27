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

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
// }

// const bst = new Bst()

// bst.insert(4)
// bst.insert(6)
// bst.insert(5)
// bst.insert(3)
// bst.inOrder(bst.root)

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
//             this.insertNode(root,node)
//         }
//     }

//     insertNode(root,node){

//     }
// }


// class Graph {
//     constructor(){
//         this.graph = new Map()
//     }

//     insert(vertex,edge,isbidirectional){
//         if(!this.graph.has(vertex)){

//         }
//     }
// }


// curriying


// const multiply = (x) => {
//     return (y)=>{
//         console.log(x+y);
//         return(z)=>{
//             return(u)=>{
//                 console.log(x,y,z,u)
//             }
//         }

//     }

// }
// multiply(7,6)()


// function sun () {
//     return sun (){

//     }
// }


// function*  generator () {
//     function abc () {
//         console.log('it is abc');
//     }
//     yield abc()

//     const numbers = [1, 2, 3, 4, 5];
//     yield numbers;

//     yield 123

//     yield 456
// }

// const inst = generator()

// console.log(inst.next());
// console.log(inst.next().value);


// const address = "1.1.1.1"

// var defangIPaddr = function(address) {
//     let result = ''
//     for(let i=0; i<address.length; i++){
//         if(address[i] === '.'){
//             result += `[${address[i]}]`
//         }else{
//             result += address[i]
//         }
//     }
//     console.log(result);
// };

// defangIPaddr(address)

// let  nums = [2,2,1]

// var singleNumber = function(nums) {
//     let count
//     for(let i=0; i<nums.length; i++){
//          count = 0
//         for(let j=0; j<nums.length; j++){
//             if(nums[i] === nums[j]){
//                 count++
//             }
//         }
//         if(count <= 1){
//             console.log(nums[i]);
//         }
//     }
// };

// singleNumber(nums)


// console.log(A)

// var A = 10


// const arr = [1,2,3,4,5,6]


// const copy = arr.concat()

// copy.pop()
// console.log(copy);

// console.log(arr);


// const arr = [1,2,4,3,5,34,45,65]

// arr.forEach((x,y,z,u)=>{
//     console.log(x,y,u);
// })
// const arr = [1,2,4,3,5,34,45,65]

// arr.reduce((x,y,z)=>{
//     console.log(x,y,z);
// })


// function doSomethingAsync(callback) {
//     // Simulate an asynchronous task (e.g., API request, setTimeout)
//     setTimeout(function() {
//       console.log("Task done!");
//       callback();
//     }, 2000);
//   }
  
// //   function onTaskComplete
  
//   // Call the function with the callback
//   doSomethingAsync(()=>{
//     console.log("Callback function executed after task completion.");
//   });
  


// function abc (a,callback){
//     callback(a)
//     console.log('hai',a);
// }

// abc(10,(a)=>{
//     console.log('hlooo',a);
// })



// console.log('Start');

// setImmediate(() => {
//     console.log('Callback executed in the next event loop iteration');
// });

// process.nextTick(() => {
//     console.log('process');
// })
// console.log('end');





// function abc (one,two,...rest){
//     console.log(one);
//     console.log(two);
//     console.log(rest);
// }

// // abc(1,2,3,4,5,6,6)

// const [one, two, ...rest] = new Array([23],[32],[42],[34],[23],[4])

// console.log(one);
// console.log(two);
// console.log(rest);


// const a = 10;

// (function (){
//         const a = 20
//         console.log(a);
//     })()


// console.log(a);


// const a = 10;

// (function(){
//     console.log(this.a);
// })()

// function abc () {
//     console.log(this.a);
// }


// const obj  = {
//     name : 'ajmal',
//     age:17
// }

// function abc (place,edu){
//     console.log(this.name,place, edu);
// }

// abc.apply(obj,['clt','plus two'])



// function abc (one, two, ...args) {
//     console.log(args);
// }



// abc(2,3,4,45,54)

// Rest Operator
// function sumNumbers(...numbers) {
//     let sum = 0;
//     for (const num of numbers) {
//       sum += num;
//     }
//     return sum;
//   }
  
//   console.log(sumNumbers(1, 2, 3, 4, 5));
  

//   Spread Operator
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combinedArray = [...arr1 ,...arr2];
// console.log(combinedArray);
