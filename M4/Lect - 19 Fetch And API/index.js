// // fetch('https://fakestoreapi.com/products/1')
// //     .then(data => {
// //         console.log(typeof data);
// //         data
// //             .json()
// //             .then(responseBody => {
// //                 console.log(responseBody);
// //              }).catch(err => {
// //                 console.log('Error:', err);
// //              });
// //     }).catch(err => {
// //         console.log(err);
// //     });`

// // const fetchData = async () => {
// //     const response = await fetch('https://fakestoreapi.com/products/1');
// //     const data = await response.json();
// //     console.log(data);
// // }
// // fetchData();

// let obj = {
//     title: 'Anuj',
//     body: 'Hi Anuj',
//     userId: 1,
// }
// console.log(obj);
// const objStr = JSON.stringify({
//     title: 'Anuj',
//     body: 'Hi Anuj',
//     userId: 1,
// });
// console.log(objStr);
// console.log(typeof objStr);
// async function fetchData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Anuj',
//             body: 'Hi Anuj',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     let result = await response.json();
//     console.log(result);
// }
// // fetchData();

const fetchData = async (productId) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    console.log(response.status);
    try {
        const data = await response.json();
        console.log(data);
        renderData(data);
    } catch (error) {
        alert('Data is not available for this product ID: ' + productId);
    }
}

const renderData = (data) => {

    const productDataTag = document.querySelector('.product-data');
    productDataTag.innerHTML = '';

    const containerTag = document.createElement('div');
    containerTag.classList.add('container');

    const imgTag = document.createElement('img');
    imgTag.setAttribute('src', data.image);
    imgTag.setAttribute('alt', data.title);
    const titleTag = document.createElement('h3');
    titleTag.textContent = data.title;
    const priceTag = document.createElement('h4');
    priceTag.textContent = `$${data.price}`;
    const descriptionTag = document.createElement('p');
    descriptionTag.textContent = data.description;

    containerTag.appendChild(imgTag);
    containerTag.appendChild(titleTag);
    containerTag.appendChild(priceTag);
    containerTag.appendChild(descriptionTag);

    
    productDataTag.appendChild(containerTag);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let productId = document.querySelector('#product-id').value;
    productId = parseFloat(productId);
    if (isNaN(productId)) {
        alert('Please enter a valid product ID');
    } else {
        fetchData(productId);
    }
});