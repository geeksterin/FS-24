// let ravi = {
//     // key : value
//     firstName: "Ravi",
//     lastName: "Kumar",
//     age: 21,
//     'add-res': "India",
//     isStudent: true
// }

// console.log(ravi.firstName)
// console.log(ravi['lastName'])
// console.log(ravi['add-res'])

// ravi.firstName = 'ravi'
// ravi.gender = 'male'
// console.log(ravi)

// delete ravi.firstName

// ravi.phoneNumber = 1234567890;
// console.log(ravi)

// "" == ''

// F to C
// const celsius = 32;
// const fahrenheit = (celsius * 9) / 5 + 32;
// console.log(fahrenheit);


// let test1 = 90;
// let test2 = 95;
// let test3 = 99.99;
// console.log((test1 + test2 + test3) / 3);

// function printDataType(variable) {
//     if (typeof variable == 'string') {
//         console.log('Data type of given variable is string');
//     } else if (typeof variable == 'number') {
//         console.log('Data type of given variable is number');
//     } else if (typeof variable == 'boolean') {
//         console.log('Data type of given variable is boolean');
//     } else {
//         console.log('Data type of given variable is ' + typeof variable);
//     }
// }
// printDataType('hello');
// printDataType(56);
// printDataType([1, 2, 3]);
// printDataType(false);


// let num = 10;
// console.log(num--); 
// post decrement => first it will give the value then it will reduce it by one.
// console.log(--num);
// pre decrement => first it will reduce the value by one then it will give.
// num = 4;
// let answer = num**3;

// console.log(answer);

// let num1 = 10;
// let num2 = '20';
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);

// let flag = false;

// console.log(num1+flag);



// let num1=10;
// let num2='10';
// console.log(num1==num2); // true
// == => it compares the value

// console.log(num1===num2); // false
// === => it compares value + data type

// let obj1 = {}; // 0F18
// let obj2 = {}; // 0F19

// console.log(obj1==obj2);
// console.log(obj1===obj2);

// let arr1 = [];
// let arr2 = [];

// console.log(arr1==arr2)
// console.log(arr1===arr2)
// console.log([]==[])

// console.log(5==5);
// console.log(5!=5); 
// console.log(6=="6");
// console.log(6!=="6");  // true
// console.log("a"=="a");
// console.log("a"!="a");


// var geek = 5;
// var a = "Geekster";
// var b = geek;
// console.log(a==b); 
// console.log(a!=b); 
// console.log(a===b);
// console.log(a!==b);


// var ram = "web development";
// console.log(5==5); 
// console.log(5===5); 
// console.log("geekster"=="geekster");
// console.log(5=="5"); 
// console.log(ram == "ram");
// console.log(5=="ram"); 

// var a = 5;
// var b = 6;
// var c = "6";
// var d = -2;
// var e = "m";
// console.log(b==c); 
// console.log(b===c);
// console.log(a>=c); 
// console.log(d<=a); 


// let times = 2 * "6" // => 12 in a number
// let times1 = 2 * "Hello" // => NaN
// 2 * NaN => NaN

// implicit type conversion ==> type coercion


// let string = ""
// let number = 40
// let boolean = true
// console.log(!string)

// !"" => !false => true

// console.log(boolean + string)

// INSIDE IMPLICIT TYPE CONVERSION 
// the final output ka data type is gonna same with one of the operand

// boolean + string
// true + ""
// "true"

// console.log(40 + true)
// String str = "23";
// int a = (int) str;

// let number = 30
// let numberConvert = String(number);
// console.log(numberConvert);
// // "30"
// console.log(typeof numberConvert)
// string

// let number = 30
// let numberConvert = Boolean(number)
// console.log(numberConvert) // true
// // true
// console.log(typeof numberConvert) // boolean
// boolean


// let boolean = false
// let booleanConvert = String(boolean)
// console.log(booleanConvert)
// console.log(typeof booleanConvert)


function helper(str1,str2,operation){
    if( operation == 'addition'){
        return str1 + str2;
    }else if( operation == 'subtraction'){
        return str1 - str2;
    }else{
        return null;
    }
}

console.log(helper('10','5','addition'));
console.log(helper('10','5','subtraction'));
console.log(helper('10','5','subtraction1'));