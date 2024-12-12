// let recipient_name = "Matt"
// Dynamic notification content
// let notification_content = `${recipient_name}, sent you a friend request.
// this is new line.
//     this is new line + tab.
// `
// console.log(notification_content)
// Send the notification content
// Matt, sent you a friend request.



// let s1 = "Geekster";
// let s2 = 'Geekster';
// let s3 = `Geekster`;

// let largeMessage = "How are you? How are you? How are you? \
// How are you? How are you? How are you? How are you? How are you?\
// How are you?How are you? \
// v"
// console.log(largeMessage)


// let firstName = 'Anuj'
// let lastName = 'Negi'
// let country = 'India'
// let city = 'Delhi'
// let language = 'JavaScript'
// let job = 'TPM'
// let age = 21
// let fullName = firstName + ' ' + lastName

// let personInfo1 = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
// let personInfo2 = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
// console.log(personInfo1)
// console.log(personInfo2)


// const camleCase = 'Hello How are You? What Are You Doing?';
// const upperCase = camleCase.toUpperCase();
// const lowerCase = camleCase.toLowerCase();
// console.log(camleCase,"|",upperCase,"|",lowerCase);

// let text = "Hi there today we will learn about String and its method let’s see:-";
// const part = text.substr(1,5);
// console.log(text);
// console.log(part);
// const index = text.search('e will');
// console.log(index);

// const ans = text.replace("we1","you will be grammer mistek");
// console.log(ans);
// console.log(text);

const person1 = {
    firstName: 'Amisha',
    age: 23
}
const person2 = {
    firstName: 'Nikhil',
    age: 24
}
const person3 = {
    firstName: 'Lakshya',
    age: 25
}
const person4 = {
    firstName: 'Mir',
    age: 26
}

// const people = [person1, person2, person3, person4];
// people[0].age += 1;
// console.log(people[0]);
// console.log(person1);`
// `
// person1.age += 1;
// console.log(person1);
// console.log(people[0]);

// const people = [person1, person2, person3, person4];
// const partOfPeople = people.slice(0,2);

// console.log(partOfPeople);
// console.log(people);
// partOfPeople[0].firstName = 'priya';
// console.log(partOfPeople[0]);
// console.log(people);
// console.log(person1);

// const people = [person1, person2, person3, person4];
// for(obj of people){
//     console.log(obj);
// }
// const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// for(num of nums){
//     console.log(num);
// }

// const person = {
//     firstName: 'Rajat',
//     lastName: 'Sharma',
//     age: 22
// }
// for(field in person){
//     console.log(field, ":", person[field]);
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (field in nums) {
//     console.log(field, ":", nums[field]);
// }

// diffrence between function statement and function express

// syntax wise diffrence 
function sum(a, b) {
    return a + b;
}
const sum1 = (a, b) => a + b;

// function statement has object with the name arguments
// function subtraction(a,b){
//     console.log(arguments);
//     let sub = 0;
//     for(index in arguments){
//         sub -= arguments[index];
//     }
//     return sub;
// }
// const ans = subtraction(5,6,7,8);
// console.log(ans);
// const subtraction1 = (a,b)=>{
//     console.log(arguments);
// }
// console.log(arguments);
// subtraction1(6,7,8,9)


const str = 'abc def ghi jkl mno';
const arr = str.split(' ');

console.log(arr);

const joinedStr = arr.join(' ');
console.log(joinedStr);