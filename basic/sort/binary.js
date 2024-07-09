// function binarySearch(array,target) {
//     let left = 0;
//     let right = array.length -1
//     while(left <= right) {
//         const mid = Math.floor((left + right)/2)
//         if(array[mid] === target){
//             return mid;
//         } else if(array[mid] < target){
//             left = mid+1
//         }else{
//             right = mid-1  
//         }
//     }
//     return 'value not found'
// }
// console.log(binarySearch(array,6));



// function binary (arr,target){
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right){
//         let mid = Math.floor((left + right)/2)
//         if(arr[mid] === target){
//             return arr[mid]
//         }
//         if(arr[mid] > target){
//              right = mid - 1
//         }else{
//              left = mid + 1
//         }
//     }
//     return 'not found'
// }


// const arr = [1,2,4,4,5,6,6,7,8]

// console.log(binary(arr,55));


// function binary (arr,target){
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right){
//         const mid = Math.floor((left + right)/2)
//         if(arr[mid] === target ){
//             return [arr[mid],mid]
//         }
//         if(arr[mid] > target){
//             right = mid - 1
//         }else{
//             left = mid + 1
//         }
//     }
//     return 'not found'
// }

// const arr = [1,2,4,4,5,6,6,7,8]

// console.log(binary(arr,5));


// function binary (arr,target){
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right){
//         const mid = Math.floor((left + right) / 2)
//         if(arr[mid] === target){
//             return [arr[mid],{postion:mid}]
//         }
//         if(arr[mid] > target){
//             right = mid - 1
//         }else {
//             left = mid + 1
//         }
//     }
//     return 'not found'
// }


// const arr = [1,2,4,5,6,7,8]

// console.log(binary(arr,6));


// function binary (arr,target){
//     let left = 0
//     let right = arr.length - 1
//     const mid = Math.floor((left + right)/2)
//     while(left <= right){
//         if(arr[mid] === target){
//             return [arr[mid],{position:mid}]
//         }
//         if(arr[mid] > target){
//             right = mid - 1
//         }else {
//             left = mid + 1
//         }
//     }
//     return console.log('not found');
// }

// const arr = [1,23,34,35,43546,656656]

// console.log(binary(arr,35));


// function binary (arr,target) {
//     let left = 0
//     let right = arr.length - 1
//     while( left <= right ){
//         const mid = Math.floor((left + right)/2)
//         if(arr[mid] === target){
//             return [arr[mid],{position:mid}]
//         }
//         if(arr[mid] > target){
//             right = mid - 1
//         }else {
//             left = mid + 1
//         }
//     }
//     return 'not found'
// }


// const arr = [1,2,3,4,4,5,66]

// console.log(binary(arr,66));



// function binarySearch (arr, target) {
//     let mid = Math.floor(arr.length - 1)
//     const left = arr
//     while( left){

//     }
// }


// binarySearch.prototype.



// const arr = [23,34,324,332]
// arr.prototype.ajmal(()=>{
//     return 'ajmal'
// })
// console.log(arr.ajmal());



// const obj = {
//     name:'dilip',
//     key1:{
//         key2:'ajmal'
//     }
// }

// const cpy = {...obj}

// cpy.key1.key2 = 'vishnu'

// cpy.name = 'rahul'
// console.log(obj);
// console.log(cpy);


// const express = require('express')

// const app = express()

// app.listen(()=>{
//   console.log('connected');
// },6000)


// function binarySearch (arr, target) {
//     let left = 0
//     let right = arr.length - 1
//     let mid = Math.floor((left + right)/2)
//     while(left <= right){
//         if(arr[mid] === target){
//             return mid
//         }

//         if(target < arr[mid]){
//             right = mid - 1
//         }else{
//             left = mid + 1
//         }
//     }
// }

// const arr = [1,2,3,4,5,6,7,8,9]

// console.log(binarySearch(arr,5));


// function binarySearch (arr, target) {
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right){
//         const mid = Math.floor((left + right)/2)
//         if(arr[mid] === target){
//             return mid
//         }

//         if(target < arr[mid]){
//             right = mid - 1
//         }else{
//             left = mid + 1
//         }
//     }
// }

// const arr = [1,2,3,4,5,6,7,8,9]


// console.log(binarySearch(arr,7));



// function binary (arr, target) {
//     let left = 0
//     let right = arr.length - 1

//     while(left <= right){
//         const mid = Math.floor((left + right)/2)
//         if(arr[mid] === target){
//             return mid
//         }

//         if(arr[mid] > target){
//             right = mid - 1
//         }else{
//             left = mid + 1
//         }
//     }
//     return 'not found'
// }

// const arr = [23,34,455,676,756]

// console.log(binary(arr,756));


// function binary (arr,target) {
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right){
//         const mid = Math.floor((left + right)/2)
//         if(arr[mid] === target){
//             return mid
//         }

//         if(arr[mid] > target){
//             right = mid - 1
//         }else{
//             left = mid + 1
//         }
//     }
//     return 'not found'
// }

// const arr = [34,55,67,89,100]

// console.log(binary(arr,55));


// function binary (arr,target) {
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right){
//         const mid = Math.floor((left+right)/2)
//         if(arr[mid] === target){
//             return mid
//         }

//         if(arr[mid] < target){
//             left = mid + 1
//         }else{
//             right = mid - 1
//         }
//     }
// }

// const arr = [1,2,4,5,67,76,78]

// console.log(binary(arr,2));

// const binarySearch = (arr, target) => {
//    let left = 0;
//    let right = arr.length - 1;

//    while(left <= right){
//     const mid = Math.floor((left + right) / 2);
//     if(arr[mid] === target) return arr[mid];
//     if(arr[mid] < target){
//         left = mid + 1;
//     }else{
//         right = mid - 1
//     }
//    }
// }

// console.log(binarySearch([1,2,4,6,7,8,34], 1))


// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         const mid = Math.floor((left + right)/2);
//         if(arr[mid] === target) return arr[mid];

//         if(arr[mid] < target){
//             left = mid + 1
//         }else{
//             right = mid - 1
//         }
//     }
// }



// const binarySearch = (arr, target) => {
//    let left = 0;
//    let right = arr.length - 1;

//    while (left <= right) {
//     const mid = Math.floor( (left + right) / 2)
//     if(arr[mid] === target){
//         return `item found at ${mid}`
//     }
//     if(arr[mid] < target){
//         left = mid + 1
//     }else{
//         right = mid - 1
//     }
//    }
// }


// function binarySearch (arr, target) {
//   let left = 0;
//   let right = arr.length - 1;


//   while (left < right) {
//     const mid = Math.floor((left + right) / 2)

//     if(arr[mid] === target){
//       return "item found at " + mid + "position"
//     }

//     if(mid > target){
//       right = mid - 1
//     }else {
//       left = mid + 1
//     }
//   }
// }



  console.log(binarySearch([1,2,4,6,7,8,34], 8))