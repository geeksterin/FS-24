const data = {
    USD: {
        INR: 80,
        EUR: 0.8,
        GBP: 0.75
    },
    INR: {
        USD: 0.0125,
        EUR: 0.011,
        GBP: 0.0105
    },
    EUR: {
        USD: 1.1,
        INR: 85,
        GBP: 0.85
    },
    GBP: {
        USD: 1.3,
        INR: 95,
        EUR: 1.15
    }
}

const convertButton = document.querySelector("#convert");

convertButton.addEventListener('click', () => {
    const amount = document.querySelector("#amount");
    const from = document.querySelector("#from");
    const to = document.querySelector("#to");
    const result = document.querySelector("#result");

    const num = parseFloat(amount.value);

    if( isNaN(num) ){
        result.innerHTML = "Goli Beta Masti Nai";
    }else{
        console.log(from.value);
        console.log(to.value);
    }

});