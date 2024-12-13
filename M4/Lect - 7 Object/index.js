// there are 3 ways to create a new object
// 1. Object literal
const person = {
    firstName: 'Azit',
    lastName: 'Rana',
    age: 23,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    },
    hobbies: ['Solving DSA Problem', 'Learning New Information'],
    'is male': true,
    greet: function (firstName, lastName) {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} Good Evening ${firstName} ${lastName}`);
    },
    age: 22
}
const stringifyPerson = JSON.stringify(person);
console.log(stringifyPerson);
const personObj = JSON.parse(stringifyPerson);
console.log(personObj);
// for in loop is there to iterate an object
// for(abc in person){
//     console.log(abc + ' : ' + person[abc]); // implicit type conversion == type corcion
//     console.log(person[abc]);
//     // console.log(person.abc); // abc is treated as key name so that's way it will give me  undefined as I don't have key with name abc
// }
// object vs array

// related data
// firstName,lastName,address,age,geneder,hobbies
// similar data
// numbers => 1,'2'

// const obj = {abc: 'how are you?'};
// obj.ghi = '100'; // adding key and values dynamically
// obj.abc = 'what are you doing?'; // changing value of key
// console.log(obj);
// delete obj.ghi;
// console.log(obj);


// line 15
// undefined
// console.log(person.greet);
// console.log(person.age);
// console.log(person.greet('Mir', 'Khalid'));

// okay I need to make a call to person.greet('Mir','Khalid')
// made a call and completed execution
// console.log(undefined);


// this keyword has multiple aspect based on where you are using it refers to an object
// 1. inside object this keyword refers to that object itself.

// console.log(person.address);
// console.log(person.address.street);
// console.log(person.hobbies);
// console.log(person.hobbies[1]);
// person.greet();

// console.log(person['is male']);
// const key = 'hobbies';
// console.log(person[key]);
// console.log(person.ghi);


// JSON => JavaScript Object Notation