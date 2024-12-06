// const userAnswer = prompt('How much money you spent on grocery?');

// if (userAnswer > 1000) {
//     alert('Congratulations! You are eligible for a 10% discount on your total bill.');
//     alert('Here is your discounted amount : ' + (userAnswer - userAnswer * 0.1));
//     // '2000' - '2000' * 0.1
//     // '2000' - 2000 * 0.1
//     // '2000' - 200
//     // 2000 - 200
//     // 1800
// } else if (userAnswer > 500) {
//     alert('Congratulations! You are eligible for a 5% discount on your total bill.');
//     alert('Here is your discounted amount : ' + (userAnswer - userAnswer * 0.05));
// } else {
//     alert('Sorry, you are not eligible for a discount. Your total bill remains the same.');
//     alert('Here is your original amount : ' + userAnswer);
// }

// v8 engine => chrome
// spider monkey engine => firefox
// Chakra engine => Internet Explorer


// let day = prompt('Which day is it today?').toLowerCase();
// day = 1;
// switch case is works on strict type checking
// switch (day) {
//     case 'monday':
//         alert('Today is Monday. Have a great day!');
//         break;
//     case 'tuesday':
//         alert('Today is Tuesday. Have a wonderful day!');
//         break;
//     case 'wednesday':
//         alert('Today is Wednesday. Have a fantastic day!');
//         break;
//     case 'thursday':
//         alert('Today is Thursday. Have a joyous day!');
//         break;
//     case 'friday':
//         alert('Today is Friday. Have a relaxing day!');
//         break;
//     // case 1:
//     //     alert('this is 1');
//     //     break;
//     case 'saturday':
//         alert('Today is Saturday. Have a restful day!');
//         break;
//     default:
//         alert('Sorry, that is not a valid day.');
//         break;
//     case 'sunday':
//         alert('Today is Sunday. Have a warm day!');
//         break;
// }

// array
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

// sum = 0;
// let i = 0;
// while (i < array.length) {
//     sum += array[i];
//     i++;
// }

// console.log(sum);
// sum = 0;
// i = 0;

// do {
//     sum += array[i];
//     i += 1;
// } while (i < array.length);

// console.log(sum);


// while and for => it will check the condition first and then run the code which is present inside a block

// do while => it will run the block first and then check the condition.


// we have array users where will have username and password
// let users = [
//     {
//         username: 'yash',
//         password: 'yash'
//     },
//     {
//         username: 'parichay',
//         password: 'parichay'
//     },
//     {
//         username: 'rajat',
//         password: 'rajat'
//     }
// ];

// let attempts = 3;
// // post decrement => first it will return the value and then perform the operation
// while (attempts--) {
//     // 0
//     // attempts = -1
//     const username = prompt('Please enter your username');
//     const password = prompt('Please enter your password');

//     let isValidUser = false;

//     for (let i = 0; i < users.length; i++) {
//         if (username == users[i].username && password == users[i].password) {
//             isValidUser = true;
//             break;
//         }
//     }

//     if (isValidUser) {
//         alert('Login successful!');
//         break;
//     } else {
//         alert('Invalid username or password!');
//     }
// }

// if user is not able to login after attempts then what will the value of attempts at the end of the loop

// create a function

// call calculation function

// 100 lines code

// call calculation function

// 100 lines code

// call calculation function

// 100 lines code

function nameOfFunction(arg1, agr2, agr3) {
    // you can return any type of data from the function
    // NOTE: if you are not returning then js will return undefined by default
}

// THUMB RULE => if you declare and not intialize any value then js will intialize it with undefined.

//RULE: rest param should be the last parameter of function
function sum(...numList) {
    // console.log(num1,num2,numList)
    // 10 + undefined
    // 10 + NaN
    // NaN
    let sum = 0;
    for (let i = 0; i < numList.length; i++) {
        sum += numList[i];
    }
    return sum;
}

// console.log(sum());


// function calculateFactorial(number) {
//     // if (typeof number !== 'number') {
//     //     return undefined;
//     // }

//     // '10' => this not NaN
//     // '10a' => this NaN

//     if( isNaN(number) ) {
//         return undefined;
//     }
//     if (number < 0) {
//         return undefined;
//     }
//     let factorial = 1;
//     for (let i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     return factorial;
// }

// calculateFactorial("calculate kar ke dikha")