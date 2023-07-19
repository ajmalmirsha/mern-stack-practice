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

