// const fs = require('fs').promises;

// function readFilePromise(path) {
//     const promise = fs.readFile(path);
//     console.log(promise);

//     promise.then((data)=>{
//         console.log('Promise completed successfully')
//         console.log(data.toString());
//     }).catch(error=>{
//         console.log('Promise rejected:', error);
//     });
//     console.log('End of function');
// }

// console.log('Start of function');
// readFilePromise('abc.txt')
// console.log('Invockation of function is completed');

function choozePizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const selectedPizza = "Periperi Pizza";
            console.log(`Step 1: Chose ${selectedPizza}`);
            // you will do some work
            //  if that work is successful then you give the result via resolve
            // if that work is not successful then you give the error via reject
            // resolve(selectedPizza);
            reject('Due to some technical error we are not able to chooze pizza');
        }, 1_000);
    })
}

function placeOrder(pizza) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = "Order Placed";
            console.log(`Step 2: order status ${orderStatus} for your ${pizza}`);
            resolve({ orderStatus, pizza });
            // reject('Order Placed Failed')
        }, 1_500);
    })
}

function receivePizza(orderStatus, pizza) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Step 3: ${orderStatus}`);
            console.log(`Enjoy your ${pizza}! 🍕`);
            resolve('process completed successfully')
            // reject('accident was happended')
        }, 2000); // Simulate a 2-second delay
    });
}

const btn = document.querySelector('#orderButton');

btn.addEventListener('click', async () => {
    try{
        const selectedPizza = await choozePizza();
        console.log('choose pizza is completed and selected pizza is: ' + selectedPizza);
        const orderStatus = await placeOrder(selectedPizza);
        console.log('order is placed and status is: ' + orderStatus);
        await receivePizza(orderStatus, selectedPizza);
        console.log('Pizza is received and enjoyed!');
    }catch(e){
        console.error('Error:', e);
    }
});