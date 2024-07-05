// const arr = [34,4,2,4,2,455,2]

// function quick (arr) {
//     if(arr.length < 1){
//         return arr
//     }
//     let pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < pivot) {
//             left.push(arr[i])
//         }else {
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

// console.log(quick(arr));

// function quick (arr) {
//     if(arr.length < 1){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < pivot ){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

// console.log(quick(arr));

// function quick (arr) {
//     if(arr.length <= 0){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

// const arr = [34,34,234,2342,43]

// console.log(quick(arr));

// function quick (arr) {
//     if(arr.length >= 0){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//         return[...insert(left),pivot,...insert(right)]
//     }
// }

// const arr = [23,4,44,2,4,44,54]

// console.log(quick(arr));

// function quick (arr) {
//     if(arr.length > 0){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < pivot){
//            left.push(arr[i])
//         }else{
//             right[arr[i]]
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

// const arr = [2343,34,234,23,2,443]

// // console.log(quick(arr));

// // console.log([2] === [2])

// const obj = {
//    name:'ajmal',
//    age:27
// }
// const obj2 = {
//    name:'ajmal',
//    age:27
// }

// console.log(typeof null);
// console.log(typeof undefined);

// function quick(arr){
//     if(arr.length <= 0){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []

//     for( let i=1; i<arr.length; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

// const arr = [3,54,345,345,345,34]

// console.log(quick(arr));

// function quick (arr) {
//     if(arr.length <= 0){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] > pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

// const arr = [23,4,4,43,4,4,2,42433,4]

// console.log(quick(arr));

// function quick (arr) {
//     if(arr.length <= 0){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i]  > pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]

// }

// const arr = [34,45,43,54,3,4,34,3,234,324]

// console.log(quick(arr));

//

// function quick (arr) {
//     if(arr.length <= 0){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

// const arr = [34,345,34,5,34,5,34,65,346,6]

// console.log(quick(arr));

// function quick (arr) {
//     if(arr.length <= 0){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return[...quick(left),pivot,...quick(right)]
// }

// const arr = [42,4,23,4,23,4]

// console.log(quick(arr));

// function quick (arr) {
//     if(arr.length <= 0){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

// const arr = [23,234,435,456,546,2]

// console.log(quick(arr));

// function quick (arr) {
//     if(arr.length <= 0){
//         return arr
//     }

//     const pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return  [...quick(left),pivot,...quick(right)]
// }
// const arr = [3,234,34,235,23,23,423,4]

// console.log(quick(arr));

// function quick (arr) {
//     if(arr.length <= 0){
//         return arr
//     }
//     const pivot = arr[0]
//     const left = []
//     const right = []
//     for(let i=1; i<arr.length; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

// const arr = [3,234,23,4,235,5,5]

// console.log(quick(arr));

// function abc () {
//     console.log(arguments);
// }

// abc('a','b',6)

// function quicSort(arr) {
//     if(arr.length <= 1){
//         return arr
//     }
//   const pivot = arr[0];
//   const left = [];
//   const right = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] <= pivot) {
//       left.push(arr[i]);
//     }else{
//         right.push(arr[i])
//     }
//   }
//   return [...quicSort(left), pivot, ...quicSort(right)]
// }

// const arr = [3,234,23,4,235,5,5]

// console.log(quicSort(arr));

// function quick(arr) {
//   if (arr.length <= 1) return arr;

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if(arr[i] <= pivot){
//         left.push(arr[i])
//     }else{
//         right.push(arr[i])
//     }
//   }

//   return [...quick(right), pivot, ...quick(left)]
// }
//  console.log(quick([3,234,34,234,23,4534,52,2,2,3,5,32,4,6,23,4,235,5,5]));