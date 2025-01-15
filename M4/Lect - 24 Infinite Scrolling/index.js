// let timerId;
// const apikey = "6JeO9xEj7Ip18CmdNO7lQZ4lNyxlEkcqmYwqYfCgEAU";
// const count = 10;
// const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

// const fetchData = async () => {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data;
// }
// fetchData();

// document.addEventListener("scroll", async () => {
//     const contentSeenTillNow = window.scrollY + window.innerHeight;
//     const offsetHeight = document.body.offsetHeight;
//     if (Math.abs(contentSeenTillNow - offsetHeight) <= 10) {
//         clearInterval(timerId);
//         timerId = setTimeout(async () => {
//             const data = await fetchData();
//             console.log(data);
//             renderData(data);
//         }, 5_00);
//     }
// });

// const renderData = (data) => {
//     const container = document.querySelector('.container');
//     data.forEach(element => {
//         const imgTag = document.createElement('img');
//         imgTag.src = element.urls.regular;
//         imgTag.alt = element.alt_description;
//         container.appendChild(imgTag);
//     });
// };

// (async () => {
//     const data = await fetchData();
//     renderData(data);
// })();

// // offsetHeight => is a height of your whole content
// // window.innerHeight => is a height of your viewport

$(document).ready(function () {
    console.log('browser is loaded.');
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('document fully loaded.');
});