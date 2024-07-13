// function bubble (arr) {
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
// }

// const arr = [34,5,3,52,5,4]

// bubble(arr)

// console.log(arr);

// function bubble (arr){
//     for(let i=0 ; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
// }

// const arr = [3,4,3434,3,454,5,34]

// bubble(arr)

// // console.log(arr);

// function bubble (arr) {
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j+1] < arr[j]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
// }

// const arr = [23,4,5,2,3,3,553,4,3,2]

// bubble(arr)

// console.log(arr);

// function bubble (arr) {
//     for(let i=0;i<arr.length; i++){
//         console.log('hello');
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//               [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
// }

// const arr = [324,23,234,234,23,42]

// bubble(arr)

// console.log(arr);

// function bubble (arr) {
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
// }

// const arr = [23,23,234,23,423,423,423,432]

// bubble(arr)

// const result = []
// arr.reduce((f,vlue,i)=> result.push() )
// console.log(result);

// const arr = [43,5,35,36,436,356,536]
// bubble sort

// function bubble (arr) {
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
// }

// bubble(arr)
// console.log(arr);

// quick sort

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

// console.log(quick(arr));

// insertion sort

// function insertion (arr) {
//   for(let i=0; i<arr.length; i++){
//    let curr = arr[i]
//    let j = i - 1
//    while(j >= 0 && arr[j] > curr){
//     arr[j] = arr[j+1]
//     j--
//    }
//    arr[j+1] = curr
// }
// return arr
// }

// console.log(insertion(arr));

// merge sort

// slection sort

// function selection (arr) {
//     for(let i=0; i<arr.length; i++){
//       for(let j=i+1; j<arr.length; j++){
//          if(arr[i] > arr[j]){
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//          }
//       }
//     }
// }

// selection(arr)

// console.log(arr);

// function bubble (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }

//     }
// }

// const arr = [24,35,345,345,34,345,345,43]

// bubble(arr)

// console.log(arr);

// function bubble (arr) {
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
// }

// const arr = [4,4,4534,534,534,5,3]

// bubble(arr)

// console.log(arr);

// function bubble (arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
// }

// const arr = [423,423,4,23,4,23,4]

// bubble(arr)

// console.log(arr);

// function bubble (arr) {
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
// }

// const arr = [34,234,2342,34,235]

// bubble(arr)

// console.log(arr);

// function bubble (arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//              [arr[j+1],arr[j]] =   [arr[j],arr[j+1]]
//             }
//         }
//     }
// }

// const arr =[32,24,2,42,34,23,4]

// bubble(arr)

// console.log(arr);

// function bubble (arr) {
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr
// }

// const arr  = [234,45,2,42,5,35,235,23]

// console.log(bubble(arr));

// function bubble (arr) {
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
//     }
// }

// const arr = [24,234,3,5,34,54,6,43]

// bubble(arr)

// console.log(arr);

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[j], arr[i]] = [arr[i], arr[j]];
//       }
//     }
//   }
// }

// const bubbleSort = (arr) => {
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = i + 1; j <= arr.length - 1; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
// };

// const arr = [24, 234, 3, 5, 34, 54, 6, 43];

// bubbleSort(arr);

// console.log(arr);

// function bubbleSort(arr) {
//   let swapped = false;
//   do{
//     swapped = false
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         swapped = true;
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//       }
//     }
//   }while(swapped)
// }

// function bubbleSort (arr){
//   let swapped;
//   do{
//     swapped = false
//     for(let i=0;i<arr.length; i++){
//       if(arr[i] > arr[i+1]){
//         swapped = true;
//         [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//       }
//     }
//   }while(swapped)
// }



// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true
//       }
//     }
//   } while (swapped);
//   console.log(arr)
// }





const arr = [3, 42, 34, 235, 43, 6523];
bubbleSort(arr);
