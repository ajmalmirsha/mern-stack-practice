

// function mergeSort (arr) {
//     if(arr.length <= 1){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge (left, right) {
//     const ans = []
//      while(left.length && right.length){
//         if(left[0] <= right[0]){
//             ans.push(left.shift())
//         }else{
//             ans.push(right.shift())
//         }
//      }
//      return [...ans,...left,...right]
// }


// const arr = [345,345,34,45,345,23,532,42]
    
// console.log(mergeSort(arr));



// function mergeSort (arr) {
//     if(arr.length <= 1){
//         return arr
//     }

//     const mid = Math.floor(arr.length/2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     const ans = []
//     while(left.length && right.length){
//         if(left[0] <= right[0]){
//             ans.push(left.shift())
//         }else{
//             ans.push(right.shift())
//         }
//     }
//     return [...ans,...left,...right]
// }


// const arr = [43,5,53,45,4534,634,65346,6]

// console.log(mergeSort(arr));


// for(var i=0; i<10; i++){

// }

// console.log(i);

// console.log((.2+.1 )=== .3)


// const a = 10
// console.log(a);
// if(true){
//     const a =8
//     console.log(a);
// }

// setTimeout(()=>{

// },0)
// let a = 20

// const arr = [
//     {
//         name:'ajmal',
//         mark:[{
//             subject:'maths',
//             marks:78
//         },{
//             subject:'malayalam',
//             marks:30
//         }]
//     },
//     {
//         name:'dilp',
//         mark:[{
//             subject:'maths',
//             marks:78
//         },{
//             subject:'malayalam',
//             marks:30
//         }]
//     },
//     {
//         name:'vishnu',
//         mark:[{
//             subject:'maths',
//             marks:78
//         },{
//             subject:'malayalam',
//             marks:30
//         }]
//     },
//     {
//         name:'nivas',
//         mark:[{
//             subject:'maths',
//             marks:78
//         },{
//             subject:'malayalam',
//             marks:30
//         },{
//             subject:'che',
//             marks:51 
//         }
//     ]
//     },
// ]

// const names = []
// const marks = []


// for(let i=0; i<arr.length; i++){
//     names.push(arr[i].name)
//     let sum = 0
//     for(let j=0; j<arr[i].mark.length; j++){
//       sum += arr[i].mark[j].marks
//     }
//     marks.push(sum)
// }






// const result = []
// for(let i=0; i<arr.length; i++){
//     result.push({name:names[i],marks:marks[i]})
// }


// const result = arr.map((x) =>{
//     const filteredMarks = x.mark.filter((x) => x.marks > 50)
//     // console.log(filteredMarks);
//      return{
//         name:x.name,
//         mark:filteredMarks
//      }
//     }
//     )
// console.log(result[0].mark);


// const arr2 = [2,3,234,234,23,4,2]

// let obj={
//     vishnu:{
//         place:"clicut",
//         age:30,

//     },
//     rahul:{
//         place:"kannur",
//         age:24,
        
//     },
    
//     ashik:{
//         place:"kannur",
//         age:13,

//     }
// }
// const arrs = Object.entries(obj)
// console.log(arrs);
// let max = {
//     place:arrs[0][1].place,
//     age:arrs[0][1].age
// }
// for (const [key,value] of Object.entries(obj)) {
//      if(value.age > max?.age && value.place === "kannur"){
//         max = value
//      }
// }

// console.log(max);



// function merge (arr) {
//     if(arr.length <= 1){
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)
//    return mergeSort(merge(left),merge(right))
// }


// function mergeSort(left,right){
//     const ans = []
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//            ans.push(left.shift())
//         }else{
//            ans.push(right.shift())
//         }
//     }
//     return [...ans,...left,...right]
// }


// const arr = [34,345,345,34,534,5]

// console.log(merge(arr));


// function merge (arr) {
//     if(arr.length <= 1){
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)

//     mergeSort(merge(left),merge(right))
// }


// function mergeSort (left,right) {
//     const ans  = []
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             ans.push(left.shift())
//         }else{
//             ans.push(right.shift())
//         }
//     }
//     return [...ans,...left,...right]
// }



// function merge (arr) {
//     if(arr.length <= 1) {
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)
//     return mergeSort(merge(left),merge(right))
// }

// function mergeSort(left,right){
//     const ans = []
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             ans.push(left.shift())
//         }else{
//             ans.push(right.shift())
//         }
//     }
//     return [...ans,...left,...right]
// }

// const arr = [3,435,435,345,34,5345,345]

// console.log(merge(arr));


// function merge (arr) {
//     if(arr.length <= 1){
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)
//     return mergeSort(merge(left),merge(right))
// }

// function mergeSort(left,right){
//     const ans = []
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             ans.push(left.shift())
//         }else{
//             ans.push(right.shift())
//         }
//     }
//     return [...ans,...left,...right]
// }

// const arr = [3,435,435,345,34,5345,345]

// // const arr = [324,234,23,4,234,234,2]

// console.log(merge(arr));


// function merge (arr) {
//     if(arr.length <= 1){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)
//     return mergeSort(merge(left),merge(right))
// }

// function mergeSort(left,right){
//     const ans = []
//     while(left.length && right.length){
//     if(left[0] > right[0]){
//       ans.push(right.shift())
//     }else{
//         ans.push(left.shift())
//     }   
//     }
//     return [...ans,...left,...right]

// }


// const arr = [3423,423,4,23,42,34,2,34]

// console.log(merge(arr));


// function merge (arr){
//     if(arr.length <= 1){
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)
//     return mergeSort(merge(left),merge(right))
// }

// function mergeSort(left,right){
//     const ans = []
//    while(left.length && right.length){
//     if(left[0] > right[0]){
//         ans.push(right.shift())
//     }else{
//         ans.push(left.shift())
//     }
// }
//     return [...ans,...left,...right]
// }

// const arr = [34,34,23,234,25,235,235]

// console.log(merge(arr));


// function merge (arr) {
//     if(arr.length <= 1){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)
//     return mergeSort(merge(left),merge(right))
// }

// function mergeSort(left,right){
//     const ans = []
//     while(left.length && right.length){
//         if(left[0] < right[0]){
//             ans.push(left.shift())
//         }else {
//             ans.push(right.shift())
//         }
//     }
//     return [...ans,...left,...right]
// }

// const arr = [324,43,4,34,3,5,43,5456,46]

// console.log(merge(arr));

// function merge (arr) {
//     if(arr.length <= 1){
//         return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const left = arr.slice(0,mid)
//     const right = arr.slice(mid)
//     return mergeSort(merge(left),merge(right))
// }

// function mergeSort(left,right){
//     const ans = []
//     while(left.length && right.length){
//         if(left[0] > right[0]){
//             ans.push(right.shift())
//         }else{
//             ans.push(left.shift())
//         }
//     }
//     return [...ans,...left,...right]
// }

// const arr = [32,3,43,5,3,45,34,5,43]

// console.log(merge(arr));