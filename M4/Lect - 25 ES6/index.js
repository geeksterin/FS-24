// let x = 45;
// // let x = 45; // not valid
// x = 67; // valid

// var y = 34;
// var y = 12;

// const z = 89;
// // z = 34; // not valid

// console.log(a);
// var a = 56;
// console.log(b);
// let b = 90;

// {
//     var a = 90;
//     let b = 80;
//     const c = 70;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a); // 90
// console.log(b); // refrence error
// console.log(c); // refrence error

// function addition(...arr) {
//     if (undefined === arr) return 0;
//     else {
//         return arr.reduce((num, seed) => num + seed, 0);
//     }
// }

// console.log(addition(1, 2, 3, 4, 5));
// console.log(addition());

// const arr = [1, 2, 3, 4, [99, 98, 97, 96], 5, 6];
// const def = [11, 22, 33, ...arr];
// console.log(arr);
// console.log(def);

// const person = {
//     firstName: 'puja',
//     lastName: 'Rokade',
//     age: 25,
//     address: {
//         country: 'India',
//         pincode: 1233121
//     }
// }

// const student = {
//     course: 'MERN stack',
//     ...person
// }
// console.log(person);
// console.log(student);


// const [firstName, lastName, ...otherInfo] = [
//     "Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"
// ];
// console.log(firstName, lastName, otherInfo);

// taking value from the array or object is known as descructuring

// const arr = [1, 2, 3, 4, 5, { firstName: 'Azit', lastName: 'Rana' }, [4, 5, 2]];

// const [a, b, c, d, e, { lastName }, g] = arr;
// console.log(arr);
// console.log(a, b, c, d, e, lastName, g);

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     address: {
//         city: 'New York',
//         state: 'NY'
//     }
// }
// const {
//     age, address
// } = person;
// console.log(age,address)

// function greeting(firstName){
//     console.log(`Hi, ${firstName}`);
// }
// const greet = (firstName) => console.log(`Hi, ${firstName}`);

// const greeting = (firstName = 'John',lastName) => {
//     console.log(`Hi, ${firstName} - ${lastName}`);
// }

// greeting('Azit');
// greeting();
// const firstName = 'John';

// console.log("how are you?" + firstName);
// console.log('how are you?' + firstName);
// console.log(`Hi, ${firstName}` + firstName);

// 1000 -> 1001 => O(N) -> collision movement
// O(1)

// const uniqueNumbers = new Set([1, 2, 3, 1, 2]);
// console.log(uniqueNumbers);

// const set = new Set([9, 8, 7, 34, 1, 2, 1, 23, 45, 234, , 576, 234, 2, 2, 1, 32, 2, 32, 32, 3223, 2, 3,]);
// console.log(set);
// set.add(90);

// console.log(set);

// console.log(typeof set);

// console.log(set instanceof Set);
// const arr = [1,2,3];
// console.log(typeof arr);
// console.log(arr instanceof Array);
// console.log(arr instanceof Function);
// const fun = ()=>{}

// console.log(fun instanceof Function);
// console.log(typeof fun);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 10];

// console.log(arr.find((num) => {
//     return 0 == num % 2;
// }));

// console.log(arr.findIndex((num)=>{
//     return 0 == num % 2;
// }));


// split
// splice
// slice
// join


// const str = 'abcd';
// const s1 = Symbol(str);
// const s2 = Symbol(str);

// console.log(s1);
// console.log(s2);
// console.log(s1 == s2);
// console.log(s1 === s2);

// const obj = {
//     [s1]: 'somthing',
//     [s2]: 'another thing'
// }
// console.log(obj);
// console.log(obj[s1]);
// console.log(obj[s2]);

// function fun(obj) {
//     // i want to add one new key to obj and i don't want to override the existing keys
//     // i will return the new key name from the function
//     const key = Symbol('key');
//     obj[key] = 'India';
//     return key;
// }
// const obj = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30
// }

// const newKey = fun(obj);
// console.log(obj);
// console.log(newKey);
// console.log(obj[newKey]);

// const obj1 = {
//     address: 'ghi'
// }

// const newKey1 = fun(obj1);

const map = new Map();
map.set(1,11);
map.set(2,12);
console.log(map);
console.log(map.get(1));
map.delete(2);
console.log(map);
console.log(map.get(11));