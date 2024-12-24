const data = {
    USD: {
        INR: 80,
        EUR: 0.8,
        GBP: 0.75,
        USD: 1
    },
    INR: {
        USD: 0.0125,
        EUR: 0.011,
        GBP: 0.0105,
        INR: 1
    },
    EUR: {
        USD: 1.1,
        INR: 85,
        GBP: 0.85,
        EUR: 1
    },
    GBP: {
        USD: 1.3,
        INR: 95,
        EUR: 1.15,
        GBP: 1
    }
}

const amountTag = document.querySelector("#amount");
const fromTag = document.querySelector("#from");
const toTag = document.querySelector("#to");
const resultTag = document.querySelector("#result");

const currencyConverter = () => {
    if (amountTag.value == '') {
        resultTag.innerHTML = '';
        return;
    };
    const num = parseFloat(amountTag.value);
    const from = fromTag.value;
    const to = toTag.value;
    if (isNaN(num)) {
        resultTag.innerHTML = "Goli Beta Masti Nai";
    } else {
        resultTag.innerHTML = num * data[from][to];
    }
}

amountTag.addEventListener('input', currencyConverter);
fromTag.addEventListener('change', currencyConverter);
toTag.addEventListener('change', currencyConverter);