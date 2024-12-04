/*
console.log("Hello World!")

console.log("Hello","How are you?","What are you doing?")
*/
console.log("slkngwe", "wefgwrg", "wegwer")

// int a;

// let , var , const

// const b; // declaration of const is not supported

// const a = 10; // declaration + initialization
// console.log(a); // 10

// b = 90;

// a = 25; // assignment
// console.log(a); // 25


// console.log(b); // 90

// let _23$a$A$__$$$f = 67;

// let str = "hello";

// str += "How are you?"

// let num = 56;

// let arr = [1,2,3,4,5,6,7];

// let abc = undefined;

// console.log(abc);

// abc = null;

// console.log(abc);

// if (abc) {
//     console.log("Hello World");
// } else {
//     console.log("Hello Universe");
// }

const bigIntValue = 123456789012345678901234567890123456789012345678n;
const anotherBigInt = BigInt(42);

console.log(bigIntValue);
console.log(anotherBigInt);

// Primitive
// Number
// BigInt
// String
// Boolean
// symbol
// null
// undefined

// Non-Primitive
// Object
//     array
//     function

let a = 67;
console.log(typeof a);

a = "How are you?";
console.log(typeof a);

// if a and b are number then return sum of them
// if any one is string and other is number then return null
// if both string then return undefined
function sum(a, b) {
    // return a + b;
    if( typeof a=="number" && typeof b=="number"){
        return a+b;
    }else if( typeof a=="string" && typeof b=="number"){
        return null;
    }else if( typeof a=="string" && typeof b=="string"){
        return undefined;
    }
}

console.log(sum(10,20));