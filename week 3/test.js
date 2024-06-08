


// currying


// function abc (name) {
//     return (age)=>{
//         return `name is ${name} and age is ${age}`
//     }
//     return (place)=>{
//         return `name is ${name} and place is ${place}`
//     }
// }

// const result = abc('ajmal',88)

// console.log(result);

// function ABC () {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('hello')
//         },5000)
//     })
// }
// function BCA () {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('hai')
//         },5000)
//     })
// }
// function CBA () {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject('hlllloi')
//         },5000)
//     })
// }


// Promise.all([ABC(),BCA(),CBA()]).then(([one,two,three])=>{
//     console.log('one',one);
//     console.log('two',two);
//     console.log('three',three);
// }).catch(err => {
//     console.log(err);
// })