// what is use of function?

function add(a, b) {
    return a + b;
    // if you don't return anything, it will return undefined
}

// console.log(add(1, 2));

function addition(a, b, ...c) {
    // c => is rest parameter
    let sum = a + b;
    console.log(a);
    console.log(b);
    console.log(sum);
    console.log(c);
    // a+b => 1+undefined => 1 + NaN => NaN
    // sum = NaN
    for (let i = 0; i < c.length; i++) {
        sum += c[i];
    }
    return sum;
}

// console.log(addition(1,2,3,4,5,6,7,8,9,10));
// console.log(addition(1));

// function addition1(){
//     // function have arguments objects which is array like object which contains all the arguments passed to the function
//     console.log(arguments);
// }
// addition1(1,2,3,4,5,6,7,8,9,10,"hello",{firstName:"John",lastName:"Doe"});


// types of functions

// 1. named function
// 2. anonymous function
// 3. arrow function
// 4. IIFE (Immediately Invoked Function Expression)
// 5. Generator function
// 6. Async function
// 7. Sync function

// 1. named function or function statement or function declaration
// function add(a, b) {
//     return a + b;
// }

// 2. anonymous function or function expression
// const add1 = function (a, b) {
//     return a + b;
// }

// 3. arrow function
// const add2 = (a, b) => a + b;
// const add3 = (a, b) => {
//     return a + b;
// }

// console.log(add2(1, 2));
// console.log(add3(1, 2));

// 4. IIFE (Immediately Invoked Function Expression)

// this is also known as function expression
// (function (a,b){
//     return a+b;
// });

// function expression + Imdiately Invoked => IIFE
// const sum = (function (a,b){
//     console.log(a,b,a+b);
//     return a+b;
// })(1,2);
// console.log(sum);


// callback function => function which is passed as an argument to another function
// function calculate(a, b, operation) {
//     // process on the input
//     // validation
//     const num1 = parseInt(a); // parseInt will try convert string to number if not possible then it will return NaN
//     const num2 = parseInt(b);
//     // isNaN => its function which is use to check if the value is not a number or not
//     // if the value is not a number then it will return true otherwise false
//     if (isNaN(num1) || isNaN(num2)) {
//         return "Please enter valid numbers";
//     }
//     return operation(num1, num2);
// }
// function addition(a, b) {
//     return a + b;
// }
// function subtraction(a, b) {
//     return a - b;
// }
// console.log(calculate(1,2,addition));
// console.log(calculate(1,'2',subtraction));
// console.log(calculate('a1',2,subtraction));

// HOF => Highr Order Function => function which takes another function as an argument OR return a function
// function giveMachine(str){
//     if( str.toLowerCase() === "addition"){
//         return function(...arr){
//             let sum = 0;
//             for(let i=0;i<arr.length;i++){
//                 sum += arr[i];
//             }
//             return sum;
//         }
//     }else if( str.toLowerCase() === "subtraction"){
//         return function(...arr){
//             let sum = 0;
//             for(let i=0;i<arr.length;i++){
//                 sum -= arr[i];
//             }
//             return sum;
//         }
//     }
// }
// const addMachine = giveMachine("addition");
// console.log(addMachine(1,2,3,4,5,6,7,8,9,10));
// const subMachine = giveMachine("subtraction");
// console.log(subMachine(1,2,3,4,5,6,7,8,9,10));


// context is like a box inside which your code is going to be executed
// we have 2 types of context
// 1. global context
// 2. function context

// global context => this is the default context which is created when the code is executed
// function context => this is the context which is created when the function is called


// let a = 10;
// console.log(a);

// let b = 20;
// console.log(b);


// function add(num1, num2) {
//     console.log(num1, num2);
//     return num1 + num2;
// }
// add(1, 2);


// var num1;
// var num2;
// num1 = 10;
// num2 = 20;
// function add(num1, num2) {
//     return num1 + num2;
// }
// var num3 = add(num1, num2);
// console.log(num3);


/*
1. Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.

    ***Sample array :*** [1,2,3,4,5]

    ***Expected Output :*** 2,4
*/
// function secondLowestAndGreatest(arr) {
//     arr.sort((a, b) => a - b);
//     return arr[1] + "," + arr[arr.length - 2];
// }
// console.log(secondLowestAndGreatest([5,4,3,1,2]));

/*
2. Write a JavaScript function to extract unique characters from a string.

    ***Example string:-***  "thequickbrownfoxjumpsoverthelazydog"

    ***Expected Output*:-** "thequickbrownfxjmpsvlazydg"
*/
// function uniqueCharacters(str){
//     const map = {};
//     for(let i=0 ; i<str.length ; i++){
//         map[str[i]] = true;
//     }
//     // thet
//     // t => true
//     // h => true
//     // e => true
//     let ans = '';
//     for(let key in map){
//         ans += key;
//     }
//     return ans;
// }
// console.log(uniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

/*
3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
    
    ***Sample function*:-** Longest_Country_Name(["Australia", "Germany", "United States of America"])
    
    ***Expected output*:** "United States of America"
*/

function longestCountryName(arr) {
    let maxCountry = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxCountry.length) {
            maxCountry = arr[i];
        }
    }
    return maxCountry;
};

console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

/*
4. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
    
    ***Sample arguments*:** 'GEEKSTER', 'E'
    
    ***Expected output*:** 3
*/

function countOccurrences(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrences('GEEKSTER', 'E'));

