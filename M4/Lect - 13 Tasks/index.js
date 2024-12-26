// const textareaTag = document.querySelector("#input");
// const currentLengthTag = document.querySelector("#current-length");
// const remainingLengthTag = document.querySelector("#remaining-length");
// const MAX_LENGTH = 5;

// textareaTag.addEventListener("input", (e) => {
//     const text = e.target.value;
//     // if (text.length > MAX_LENGTH) {
//     //     e.target.value = text.slice(0, MAX_LENGTH);
//     // } else
//     //  {
//     currentLengthTag.innerText = text.length;
//     remainingLengthTag.innerText = MAX_LENGTH - text.length;
//     // }
// });

// Task 2
// const searchTag = document.querySelector("#search");

// searchTag.addEventListener("input", (e) => {
//     const text = e.target.value;
//     document
//         .querySelectorAll('p')
//         .forEach((pTag) => {
//             const nameTag = pTag.querySelector('.name');
//             if (nameTag.innerText.toLowerCase().includes(text.toLowerCase())) {
//                 pTag.style.display = "block";
//             } else {
//                 pTag.style.display = "none";
//             }
//         });
// });

// Task 3
const btnTag = document.querySelector("#btn");
const bodyTag = document.querySelector("tbody");
const btnResetTag = document.querySelector("#btn-reset");

const data = [
    { name: "Ernst Handel", value: "Roland Mendel" },
    { name: "Island Trading", value: "Helen Bennett" },
    { name: "Laughing Bacchus Winecellars", value: "Yoshi Tannamuri" },
    { name: "Magazzini Alimentari Riuniti", value: "Giovanni Rovelli" },
    { name: "North/South", value: "Simon Crowther" },
    { name: "Vaffeljernet", value: "Palle Ibsen" },
    { name: "Paris Specialites", value: "Marie Bertrand" },
    { name: "Rattlesnake Canyon Grocery", value: "Paula Wilson" },
    { name: "Simons bistro", value: "Jytte Petersen" },
    { name: "Centro comercial Moctezuma", value: "Francisco Chang" },
    { name: "Toms Spezialitten", value: "Karin Josephs" },
    { name: "Alfreds Futterkiste", value: "Maria Anders" },
    { name: "The Big Cheese", value: "Liz Nixon" },
]
const backup = [...data];

bodyTag.innerHTML = data.map(
    item => `<tr><td class="name">${item.name}</td> <td class="value">${item.value}</td> </tr>`
).join('');

btnTag.addEventListener("click", () => {
    const sortedData = data.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);

    bodyTag.innerHTML = sortedData.map(
        item => `<tr><td class="name">${item.name}</td> <td class="value">${item.value}</td> </tr>`
    ).join('');
    console.log(data);
});

btnResetTag.addEventListener("click", () => {
    bodyTag.innerHTML = backup.map(
        item => `<tr><td class="name">${item.name}</td> <td class="value">${item.value}</td> </tr>`
    ).join('');
});