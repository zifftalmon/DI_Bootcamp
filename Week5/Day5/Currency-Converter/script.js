// api key https://v6.exchangerate-api.com/v6/20a5025d282a16c6561cb0a3/latest/USD

const form = document.getElementById("form");

// form.addEventListener("submit", getCurrnecy);

let ratesKeysArray = [];

const firstSelect = document.getElementById("firstSelect")
const secondSelect = document.getElementById("secondSelect")


async function getRates () {
    const currencyPromise = await fetch("https://v6.exchangerate-api.com/v6/20a5025d282a16c6561cb0a3/latest/USD");
    const currencyObj = await currencyPromise.json();
    const currency = await currencyObj.conversion_rates;
    const keysArr = Object.keys(currency);
    keysArr.map(element => console.log(element));
    appendOptionsFrom(keysArr);
    appendOptionsTo(keysArr);
}
getRates();

function appendOptionsFrom (arr) {
    arr.map((element) => {
        let option = document.createElement("option");
        let optionText = document.createTextNode(element);
        option.append(optionText);
        firstSelect.append(option);
    })
}


function appendOptionsTo (arr) {
    arr.map((element) => {
        let option = document.createElement("option");
        let optionText = document.createTextNode(element);
        option.append(optionText);
        secondSelect.append(option);
    })
}