const submitButton = document.querySelector("#submit");
const title = document.querySelector("#title");
const container = document.querySelector(".container");
const input = document.querySelector("#input");
const note = document.querySelector("#note");
const form = document.querySelector("#form");

submitButton.addEventListener('click', () => {
    title.style.color = "red";
});

// container.addEventListener('mouseover', () => {
//     console.log("mouseover");
//     container.style.backgroundColor = "blue";
// });

// container.addEventListener('mouseout', () => {
//     console.log("mouseout");
//     container.style.backgroundColor = "yellow";
// });

// container.addEventListener('mouseenter', () => {
//     console.log("mouseenter");
//     container.style.backgroundColor = "red";
// });

// container.addEventListener('mouseleave', () => {
//     console.log("mouseleave");
//     container.style.backgroundColor = "green";
// });

// when someone clicks the submit button,
// we want to change the color of the title

// input.addEventListener('keypress',()=>{
//     console.log('key is pressed');
// });

// input.addEventListener('keyup', () => {
//     console.log('key is released');
// });

// input.addEventListener('keydown', () => {
//     console.log('key is pressed');
// });
// const noteContent = note.innerHTML;
// document.addEventListener('keypress', (event) => {
//     console.log(event);
//     note.innerHTML = noteContent + event.key;
//     // console.log('document key is pressed');
// });


// you can not apply each type of event to each tag

// change => is applied on input tag

input.addEventListener('change', () => {
    console.log('change');
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submit');
});