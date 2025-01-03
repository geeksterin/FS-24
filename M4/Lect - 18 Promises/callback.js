function choozePizza(callback) {
    setTimeout(() => {
        const selectedPizza = "Periperi Pizza";
        console.log(`Step 1: Chose ${selectedPizza}`);
        callback(selectedPizza);
    }, 1_000);
}

function placeOrder(callback, pizza) {
    setTimeout(() => {
        const orderStatus = "Order Placed";
        console.log(`Step 2: ${orderStatus}`);
        callback(orderStatus, pizza);
    }, 1_500);
}

function receivePizza(orderStatus, pizza) {
    setTimeout(() => {
        console.log(`Step 3: ${orderStatus}`);
        console.log(`Enjoy your ${pizza}! 🍕`);
    }, 2000); // Simulate a 2-second delay
}

const btn = document.querySelector('#orderButton');

btn.addEventListener('click', () => {

    choozePizza((selectedPizza) => {
        placeOrder((orderStatus,pizza) => {
            receivePizza(orderStatus,pizza);
        }, selectedPizza)
    });
});