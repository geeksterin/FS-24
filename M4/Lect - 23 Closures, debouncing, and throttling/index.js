// function parent() {
//     const firstName = 'Rajat';
//     function child() {
//         console.log(firstName);
//     }
//     // child();
//     return child;
// }
// // parent();
// const fun = parent();
// fun();

// const multiplyerGenerator = (num1) => {
//     return (num2) => {
//         return num1 * num2;
//     }
// }

// const multiplyByTwo = multiplyerGenerator(2);
// console.log(multiplyByTwo(2));
// console.log(multiplyByTwo(3));
// console.log(multiplyByTwo(4));
// console.log(multiplyByTwo(5));

// const multiplyByThree = multiplyerGenerator(3);
// console.log(multiplyByThree(2));
// console.log(multiplyByThree(3));
// console.log(multiplyByThree(4));
// console.log(multiplyByThree(5));
// console.log(multiplyByThree(6));
// // with the help of closure child function can access parents vaiable after end of the parent function as well.


// function createCounter() {
//     let count = 0;

//     const increment = () => {
//         count++;
//         getCount();
//     }
//     const decrement = () => {
//         count--;
//         getCount();
//     }
//     const getCount = () => {
//         const counter = document.querySelector('#counter');
//         counter.textContent = count;
//     }

//     const incrementBtn = document.querySelector('#increment-btn');
//     const decrementBtn = document.querySelector('#decrement-btn');

//     incrementBtn.addEventListener('click', increment);
//     decrementBtn.addEventListener('click', decrement);
// }
// createCounter();
let debounceTimerId = null, throttleTimerId = null;

const debounceBackendApiCall = () => {

    if (timerId) {
        clearInterval(timerId);
    }
    timerId = setTimeout(() => {
        console.log('we made backend call');
    }, 5_00);
    // console.log(timerId);
    // clearInterval(timerId);s
}
const throttleBackendApiCall = () => {
    if (throttleTimerId) return;
    throttleTimerId = setTimeout(() => {
        throttleTimerId = null;
        console.log('we made backend call.');
    }, 5_00);
}

/*
*/

const searchTag = document.querySelector('#search');
searchTag.addEventListener('input', throttleBackendApiCall);
