// const containerTag = document.querySelector(".container");
// const childContainerTag = document.querySelector(".child-container");
// const grandChildContainerTag = document.querySelector(".grand-child-container");

// containerTag.addEventListener("click", () => {
//     console.log("parent container clicked");
// });

// childContainerTag.addEventListener("click", () => {
//     console.log("child container clicked");
// },true);

// grandChildContainerTag.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("grand child container clicked");
// },true);


// document.addEventListener("click", () => {
//     console.log("document clicked");
// });


// // tag.addEventListener(eventType, callback, isPropagating);

// when some clicks on box a number present inside myAttribute should be displayed inside alert box

// const childTags = document.querySelectorAll(".child");

// childTags.forEach((childTag) => {
//     childTag.addEventListener("click", () => {
//         alert(childTag.getAttribute("myAttribute"));
//     });
// });

// const mainTag = document.querySelector(".main");

// mainTag.addEventListener("click", (event) => {
//     if (event.target.getAttribute("myAttribute")) {
//         alert(event.target.getAttribute("myAttribute"));
//     }
// });

// 'use strict'

// // var a = 10;
// // console.log(a);
// // var a = 20;
// // console.log(a);
// a = 10;
// console.log(a);

// "use strict";
// function test() {
//     console.log(this);
// }
// test();


// "use strict";
// function myFunction(a, a) {
//   // SyntaxError: Duplicate parameter name not allowed in this context
// }

// let x = 10;
// delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.
// console.log(x);

// "use strict";
// var a = 10;
// console.log(a);
// a = '20';
// console.log(a);

function myFunction() {
    "use strict";
    let x = 10;
    delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.
    console.log(x);

}
myFunction();
