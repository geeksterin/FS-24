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

const mainTag = document.querySelector(".main");

mainTag.addEventListener("click", (event) => {
    if (event.target.getAttribute("myAttribute")) {
        alert(event.target.getAttribute("myAttribute"));
    }
});