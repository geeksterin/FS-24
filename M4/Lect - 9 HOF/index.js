// const arr = [1, 2, 3, 4, 5];

// const data = arr.forEach((...element) => {
//     console.log(element);
//     return element+2;
// });
// console.log(data);

// const products = [
//     { id: 1, name: 'Product 1', price: 99 },
//     { id: 2, name: 'Product 2', price: 139 },
//     { id: 3, name: 'Product 3', price: 99 },
//     { id: 4, name: 'Product 4', price: 149 },
//     { id: 5, name: 'Product 5', price: 359 }
// ];

// // Print each product using forEach
// products.forEach(product => {
//     console.log(`Product ID: ${product.id}`);
//     console.log(`Product Name: ${product.name}`);
//     console.log(`Product Price: $${product.price}`);
//     console.log('---------------------');
// });

// const arr = [1, 2, 3, 4, 5];
// I want to add 2 to each element of the array

// const data = [];
// for (let i = 0; i < arr.length; i++) {
//     data.push(arr[i] + 2);
// }
// console.log(data);

// Array.prototype.myMap = function(callback) {
//     const arr = this;
//     // I need to run callback for each element of the array and when 
//     // I call callback I need to pass the element of the array + index + actual array
//     // I need to store the result of the callback in a new array
//     // I need to return the new array
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr));
//     }
//     return result;
// }


// const data1 = arr.map((...element) => {
//     console.log(element);
//     // return element+2;
// });
// console.log(data1);

// const data2 = arr.myMap((...element) => {
//     console.log(element);
//     // return element+2;
// });
// console.log(data2);

// function myMap(arr, callback) {
//     // I need to run callback for each element of the array and when 
//     // I call callback I need to pass the element of the array + index + actual array
//     // I need to store the result of the callback in a new array
//     // I need to return the new array
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr));
//     }
//     return result;
// }

// const products = [
//     { name: 'Product A', price: 15.5687 },
//     { name: 'Product B', price: 20.5687 },
//     { name: 'Product C', price: 30.5687 },
//     { name: 'Product D', price: 10.5687 },
// ];

// Use map() to format prices with a currency symbol
// const formattedProducts = products.map(product => ({
//     name: product.name,
//     price: `$${product.price.toFixed(2)}`,
// }));

// console.log(formattedProducts);
// const data3 = products.myMap(product => ({
//     name: product.name,
//     price: `$${product.price.toFixed(2)}`,
// }));
// console.log(data3);

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const filteredData = arr.filter(element => element > 5);
// console.log(filteredData);

// const arr = [1, 2, 3, 4, 5];

// // sum this array
// const sum = arr.reduce((sumTillNow, element) => {
//     return sumTillNow + element;
// }, 0);

// console.log(sum);

// i=0,arr[i]=1 => sumTillNow=0,element=1 => sumTillNow+element=1 ==> sumTillNow=1 for next itration
// i=1,arr[i]=2 => sumTillNow=1,element=2 => sumTillNow+element=3 ==> sumTillNow=3 for next itration
// i=2,arr[i]=3 => sumTillNow=3,element=3 => sumTillNow+element=6 ==> sumTillNow=6 for next itration
// i=3,arr[i]=4 => sumTillNow=6,element=4 => sumTillNow+element=10 ==> sumTillNow=10 for next itration
// i=4,arr[i]=5 => sumTillNow=10,element=5 => sumTillNow+element=15 ==> sumTillNow=15 for next itration


// const cart = [
//     { name: 'Product 1', price: 10 },
//     { name: 'Product 2', price: 20 },
//     { name: 'Product 3', price: 30 },
//     // Add more products as needed
// ];

// // Use reduce to calculate the total price of items in the cart
// const totalPrice = cart.reduce((total, product) => total + product.price, 0);

// console.log(`Total Price: $${totalPrice}`);

// const inventory = [
//     { product: 'Laptop', quantity: 15 },
//     { product: 'Tablet', quantity: 8 },
//     { product: 'Smartphone', quantity: 25 },
//     { product: 'Watch', quantity: 2 },
// ];
// // if quantity is less than 10 then log low stock and also give me those products' names
// const lowStockProductsNames = inventory.reduce((arr, item) => {
//     if (item.quantity < 10) {
//         console.log(`Low stock for ${item.product}. Reordering...`);
//         arr.push(item.product);
//     }
//     return arr;
// }, []);
// console.log(lowStockProductsNames);

// inventory.forEach(item=>{
//     if( item.quantity < 10 ){
//         console.log(`Low stock for ${item.product}. Reordering...`);
//     }
// })
// if quantity is less than 10 then log low stock and also give me those products' names
// const lowStockProducts = inventory.filter(item => {
//     if (item.quantity < 10) {
//         console.log(`Low stock for ${item.product}. Reordering...`);
//         return true;
//     }
// });
// console.log(lowStockProducts);
//

// Using forEach() to check and trigger reorder processes for low-stock items
// inventory.forEach(item => {
//     if (item.quantity < 10) {
//         console.log(`Low stock for ${item.product}. Reordering...`);
//         // Logic to trigger a reorder process goes here
//     }
// });

// Using for...of loop to achieve the same
// for (const item of inventory) {
//     if (item.quantity < 10) {
//         console.log(`Low stock for ${item.product}. Reordering...`);
//         // Logic to trigger a reorder process goes here
//     }
// }


const orders = [
    { type: 'digital', totalAmount: 50 },
    { type: 'physical', totalAmount: 120 },
    { type: 'gift card', totalAmount: 25 },
];

// a product is cheap if amount of that product is less than 100.
// give me the total amount of all the cheap products

const filteredOrders = orders.filter(order => order.totalAmount < 100);
let totalAmountOfCheapProducts = filteredOrders.reduce((sum, order) => sum + order.totalAmount, 0);
console.log(totalAmountOfCheapProducts);

// chaining
totalAmountOfCheapProducts = orders
    .filter(order => order.totalAmount < 100)
    .reduce((sum, order) => sum + order.totalAmount, 0);
console.log(totalAmountOfCheapProducts);

totalAmountOfCheapProducts = orders.reduce((sum, order) => {
    if (order.totalAmount < 100) {
        sum += order.totalAmount;
    }
    return sum;
}, 0)
console.log(totalAmountOfCheapProducts);

// js has map,reduce,filter but there are some browser which does not support these methods.

// polyfill
