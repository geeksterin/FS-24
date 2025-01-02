// const fs = require('fs').promises;

// async function readFileAndLog(filePath) {
//     try {
//         const data = await fs.readFile(filePath, 'utf8');
//         console.log('File read successfully:', filePath);
//         console.log(data);
//     } catch (error) {
//         console.error('Error reading file:', error);
//     }
// }

// readFileAndLog('helper.txt');
// for (let i = 0; i < 10; i++)
//     console.log('file reading is going on');


// const greeting = ()=>{
//     console.log('Hey this is a greeting')
// }

// console.log("hello, How are you?");
// greeting();
// console.log("I am fine");



// console.log("hello, How are you?");
// let t1;
// setTimeout(() => {
//     console.log(Date.now() - t1);
//     console.log("Callback is invoked");
// }, 0);
// t1 = Date.now();
// console.log("I am fine");
// for(let i=0 ; i< 10_00_00_00_000 ; i++){

// }












// let t1 = Date.now();
// let count = 0;
// const intervalId = setInterval(() => {
//     console.log(Date.now() - t1);
//     console.log(++count);
//     console.log('2 seconds are passed')
// }, 2_000);

// setTimeout(()=>{
//     console.log('30 seconds are passed')
//     clearInterval(intervalId);
// },30_000)



// function f1() {
//     console.log('f1');
// }
// function f2() {
//     console.log('f2');
// }
// function main() {
//     console.log('main');
//     setTimeout(() => {
//         console.log("this is first function")
//     }, 0);
//     setTimeout(() => {
//         console.log("this is second function")
//     }, 0);
// }
// main();


let t = Date.now();
setTimeout(()=>{
    console.log(Date.now() - t);
    console.log('Calback is invoked');
},1_000);
for(let i=0 ; i<1_00_00_00_00_000 ; i++) {
}