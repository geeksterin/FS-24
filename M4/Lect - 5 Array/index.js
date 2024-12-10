// let arr = [
//     1,
//     true,
//     false,
//     { firstName: 'Rudresh' },
//     "how are you",,,
//     null,
//     undefined,
//     () => {
//         console.log('This is a function');
//     }
// ];
// console.log(arr);

// const arr = [];
// arr[0] = 34;
// arr[3] = true;
// arr[9] = 65;
// console.log(arr);
// 34,<8 empty items>,65


// push,pop,shift,unshift

// let playerInfo = [
//     { name: 'Priyanshu', score: 100 },
//     { name: 'Krishna', score: 90 },
//     { name: 'Rahul', score: 80 },
//     { name: 'Abhinav', score: 80 },
//     { name: 'Akhil', score: 70 },
//     { name: 'Anuj', score: 60 },
//     { name: 'Lavinsh', score: 50 }
// ];

// console.log(playerInfo);
// const sliceOfThePlayers = playerInfo.slice(1,5)
// 1 => starting index => included
// 4 => ending index => excluded
// console.log(sliceOfThePlayers)
// console.log(playerInfo);

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const ghi = arr.splice(-2, 3);
// console.log(ghi);
// console.log(arr);

// console.log(arr);
// const splicedArr = arr.splice(2,0,41,42,43,44,99,92,95);
// // 2 => starting index => included
// // 4 => number of elements which gonna be removed
// // and remaining elements are gonna be added from 2nd index
// console.log(splicedArr)
// console.log(arr);

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(arr);
// const reversedArr = arr.reverse();
// console.log(reversedArr);
// console.log(arr);

// Suppose you want to check if there are any players in the leaderboard with a score above 90. How would you do that?
// let playerInfo = [
//     { name: 'Priyanshu', score: 89 },
//     { name: 'Krishna', score: 90 },
//     { name: 'Rahul', score: 95 },
//     { name: 'Abhinav', score: 100 },
//     { name: 'Akhil', score: 70 },
//     { name: 'Anuj', score: 60 },
//     { name: 'Lavinsh', score: 50 }
// ];

// function givePlayerByScoreLimit(arr, limit) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].score > limit) {
//             return arr[i];
//         }
//     }
// }
// console.log(givePlayerByScoreLimit(playerInfo, 90));

// callbacks

// why js is known first class function
// in js functions can be stored inside variable
// function can be passed and returned from another function
// due to this functions are known first class function

// function getMachine(task) {
//     if (task == 'addition') {
//         return function (num1,num2) {
//             return num1+num2;
//         }
//     } else if (task == 'multiplication') {
//         return function (num1,num2) {
//             return num1*num2;
//         }
//     }
// }
// const additionMachine = getMachine('addition');
// console.log(additionMachine(4,5));
// console.log(additionMachine(4,9));

// function filterArray(arr, filter) {
//     const filteredArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (filter(arr[i])) {
//             filteredArray.push(arr[i]);
//         }
//     }
//     return filteredArray;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filterFunction = (number) => number % 2 == 0;
// console.log(filterArray(numbers, filterFunction));

// let playerInfo = [
//     { name: 'Priyanshu', score: 100 },
//     { name: 'Krishna', score: 90 },
//     { name: 'Rahul', score: 80 },
//     { name: 'Abhinav', score: 80 },
//     { name: 'Akhil', score: 70 },
//     { name: 'Anuj', score: 60 },
//     { name: 'Lavinsh', score: 50 }
// ];

// I want first student who has less then 70 marks

// some function will run the callback on each element of the array one after another 
// as soon as it gets true value it will stop the exectuion and return true to us
// const returnedValue = playerInfo.some((element) => {
//     if (element.score < 70) {
//         return true;
//     } else {
//         return false;
//     }
// });

// inside some => it will wait for first true as soon as it gets true value it will stop the exectuion and return true, if it doesn't get true then at the end of the array it will return false

// Suppose you want to check if there are all players in the leaderboard with a score above 90. How would you do that?

// inside every => it will wait for the first false as soon it gets false value it will stop the execution and return false if it doesn't get false then at the end of the array it will return true

// const returnedValue = playerInfo.every((element) => {
//     if( element.score>90 ){
//         return true;
//     }else{
//         return false;
//     }
// });

// let playerInfo = [
//     { name: 'Priyanshu', score: 100 },
//     { name: 'Krishna', score: 90 },
//     { name: 'Rahul', score: 80 },
//     { name: 'Abhinav', score: 80 },
//     { name: 'Akhil', score: 70 },
//     { name: 'Anuj', score: 60 },
//     { name: 'Lavinsh', score: 50 }
// ];

// Suppose you want to find the player with a score of 90. How would you do that?

// find => it will stop at the first element for which callback function returns true and return that element , if it doesn't get any such element then it will return undefined at the end of the array

// const returnedValue = playerInfo.find((element) => {
//     console.log(element);
//     if (element.score == 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(returnedValue);


// const arr = [1, 100, 2, 4, 5, 6, 10, 15];

// '100' < '15'

// you are giving callback inside sort function
// a-b
// if a-b => is -ve  => it means a is smaller than b so it will keep a before b
// if a-b => is +ve => it means b is smaller then a it will keep b before a
// if a-b => is 0 => then it will decide the original order

// b-a
// if b-a => is -ve => it means b is smaller then a it will keep a before b
// if b-a => is +ve => it means a is smaller then b it will keep b before a
// if b-a => is 0 => then it will decide the original order

// conclusion
    // if you are sending -ve then it will keep a before b
    // if you are sending +ve then it will keep b before a

// const sortedArr = arr.sort((a, b) => b - a);
// console.log(sortedArr);
// console.log(arr);

// const stringArr = playerInfo.toString();
// console.log(stringArr);
// console.log(playerInfo)

// const arr = [12,23,4,523,4,24,23,453,453,45,345];
// const arrString = arr.toString();
// console.log(arrString,typeof arrString);
// console.log(arr,typeof arr);

// const person = {firstNmae: 'Milan'};
// console.log(person.toString())

let playerInfo = [
    { name: 'Priyanshu', score: 100 },
    { name: 'Krishna', score: 90 },
    { name: 'Rahul', score: 80 },
    { name: 'Abhinav', score: 80 },
    { name: 'Akhil', score: 70 },
    { name: 'Anuj', score: 60 },
    { name: 'Lavinsh', score: 50 }
];

const stringPlayerInfo = playerInfo.toString();
console.log(stringPlayerInfo,typeof stringPlayerInfo);